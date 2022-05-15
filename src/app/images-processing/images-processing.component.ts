import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NgxPicaErrorInterface, NgxPicaResizeOptionsInterface, NgxPicaService } from '@digitalascetic/ngx-pica';
import { AlbumService } from './album.service';
import { MediaItem, MediaItemForGrouping, MediaItemService, MediaItemsGroup } from './media-item.service';
import * as dayjs from 'dayjs';
import * as customParseFormat from 'dayjs/plugin/customParseFormat';
import { GoogleLoginService } from '../google-login/google-login.service';
import { Observable, Subscription, throwError } from 'rxjs';
import { Parameters, ParametersService } from '../parameters/parameters.service';
import { catchError, map } from 'rxjs/operators';
import { DateUtilService } from '../shared/date-util.service';
import { LastUploadInfoService } from '../last-upload-info/last-upload-info.service';

export const timeDiffGroupDefault = 7200;
export const resizeWidthDefault = 1000;
export const resizeHeightDefault = 1000;
dayjs.extend(customParseFormat);

@Component({
  selector: 'ipfgp-images-processing',
  templateUrl: './images-processing.component.html',
  styleUrls: ['./images-processing.component.scss']
})
export class ImagesProcessingComponent implements OnInit, OnDestroy {

  mediaItems: MediaItem[] = [];
  mediaItemsForGrouping: MediaItemForGrouping[] = [];
  mediaItemsGroups: MediaItemsGroup[] = [];
  timeDiffGroup: number = 0;
  uploadToken: string = '';
  inputFilesForm = this.fb.group({
    inputFiles: ''
  });
  filesLoaded: boolean = false;
  filesCount: number = 0;
  groupsCreated: boolean = false;
  uploadingStatus: UploadingStatus = UploadingStatus.None;

  picaOptions: NgxPicaResizeOptionsInterface = {
    exifOptions: {
      forceExifOrientation: false
    },
    aspectRatio: {
      keepAspectRatio: true
    }
  };
  paramsForm = this.fb.group({
    timeDiffGroup: [null, [
      Validators.required,
      Validators.min(60),
      Validators.max(86400)
    ]],
    resizeWidth: [null, [
      Validators.required,
      Validators.min(1),
      Validators.max(10000)
    ]],
    resizeHeight: [null, [
      Validators.required,
      Validators.min(1),
      Validators.max(10000)
    ]]
  });
  resizeWidth: number = 0;
  resizeHeight: number = 0;
  paramsFormShow: boolean = true;
  parameters$!: Observable<Parameters>;
  error!: Object;
  lastUploadInfoSubscription!: Subscription;

  constructor(private ngxPicaService: NgxPicaService,
    private fb: FormBuilder,
    private mediaItemService: MediaItemService,
    private albumService: AlbumService,
    private googleLoginService: GoogleLoginService,
    private parametersService: ParametersService,
    private dateUtilService: DateUtilService,
    private lastUploadInfoService: LastUploadInfoService
    ) { }

  ngOnInit(): void {
    this.parameters$ = this.parametersService.getParameters().pipe(
      map(parameters => {
        this.paramsForm.patchValue({
          timeDiffGroup: parameters.timeDiffGroup,
          resizeWidth: parameters.resizeWidth,
          resizeHeight: parameters.resizeHeight
        });
        return parameters;
      }),
      catchError(err => {
        this.error = err;
        return throwError(err);
      })
    )
  }

  ngOnDestroy(): void {
    this.lastUploadInfoSubscription.unsubscribe();
  }  

  processFiles(files: any): void {
    if (files.length > 0) {
      this.filesCount = files.length;
      this.emptyArrays();
      this.getParamsResize();
      this.getMediaItems(files);
    }
  }

  private emptyArrays(): void {
    this.mediaItems = [];
    this.mediaItemsForGrouping = [];
    this.mediaItemsGroups = [];
    this.filesLoaded = false;
    this.groupsCreated = false;
    this.uploadingStatus = UploadingStatus.None;
    this.paramsFormShow = false;
  }

  getMediaItems(fileList: File[]): void {
    this.ngxPicaService.resizeImages(fileList, this.resizeWidth, this.resizeHeight, this.picaOptions).subscribe((file) => {
      this.readFileBytes(file);
    }, (err: NgxPicaErrorInterface) => {
      throw err.err;
    }, () => {
      this.filesLoaded = true;
    });
  }

  readFileBytes(file: File): void {
    let readerBytes: FileReader = new FileReader();
    readerBytes.addEventListener('load', (event: any) => {
      this.readFileUrl(readerBytes, file);
    }, false);
    readerBytes.readAsArrayBuffer(file);
  }

  readFileUrl(readerBytes: FileReader, file: File): void {
    let readerUrl: FileReader = new FileReader();
    readerUrl.addEventListener('load', (event: any) => {
      this.createMediaItem(file, readerBytes, readerUrl);
    }, false);
    readerUrl.readAsDataURL(file);
  }

  createMediaItem(file: File, readerBytes: FileReader, readerUrl: FileReader): void {
    this.mediaItems.push(new MediaItem(file.name, dayjs(file.name.replace(/D/g, ''), 'YYYYMMDD HHmmss'), readerBytes.result!, readerUrl.result!));
  }

  createGroups(): void {
    this.emptyArraysExceptMediaItems();
    this.createMediaItemsForGrouping();
    this.calculateTimeDiff();
    this.getParamsTimeDiffs();
    this.identifyGroups();
    this.groupsCreated = true;
  }

  createMediaItemsForGrouping(): void {
    this.mediaItems.sort((a, b) => {
      let dateTimeA = a.dateTime;
      let dateTimeB = b.dateTime;
      if (dateTimeA < dateTimeB) {
        return -1;
      }
      if (dateTimeA > dateTimeB) {
        return 1;
      }

      // datetimes must be equal
      return 0;
    });
    this.mediaItems.forEach((item, i) => {
      this.mediaItemsForGrouping.push(new MediaItemForGrouping(item, i + 1, 0));
    });
  }

  calculateTimeDiff(): void {
    this.mediaItemsForGrouping.forEach((item) => {
      if (item.seqNo === 1) {
        item.timeDiff = 0;
      } else {
        const prevItem = this.mediaItemsForGrouping.find((s) => s.seqNo === (item.seqNo - 1));
        item.timeDiff = item.mediaItem.dateTime.diff(prevItem!.mediaItem.dateTime, 'second');
      }
    });
  }

  identifyGroups(): void {
    let group: MediaItemsGroup;
    let id = 1;
    this.mediaItemsForGrouping.forEach((item, i) => {
      let groupName: string = "NEW " + item.mediaItem.dateTime.format('YYYY-MM-DD') + ' (' + item.mediaItem.dateTime.format('dd H') + ':00) text';
      // if the first file in the sequence, create a new group
      if (i === 0) {
        group = new MediaItemsGroup(id, item.mediaItem.dateTime, item.mediaItem.dateTime, [item], groupName);
        id++;
        // if not the first file
      } else {
        // if a new group is identified, add current group and create a new group
        if (item.timeDiff > this.timeDiffGroup) {
          this.mediaItemsGroups.push(group);
          group = new MediaItemsGroup(id, item.mediaItem.dateTime, item.mediaItem.dateTime, [item], groupName);
          id++;
          // if existing group, add the file to the group and update end time
        } else {
          group.mediaItemsForGrouping.push(item);
          group.endTime = item.mediaItem.dateTime;
        }
      }
      // if the last file in the sequence, add current group
      if ((i + 1) === this.mediaItemsForGrouping.length) {
        this.mediaItemsGroups.push(group);
      }
    });
  }

  getMediaItemsCount(): number {
    let uniqueItemsCount = 0;
    this.mediaItemsGroups.forEach((group) => {
      uniqueItemsCount += group.mediaItemsForGrouping.length;
    })
    return uniqueItemsCount;
  }

  getDaysDiffFromToday(groupDate: dayjs.Dayjs): number {
    return this.dateUtilService.getDaysDiffFromTodayDayjs(groupDate);
  }

  updateGroupName(gr: MediaItemsGroup, newName: string) {
    this.mediaItemsGroups.forEach((group) => {
      if (group.id === gr.id) {
        group.name = newName;
      }
    });
  }

  async uploadToGooglePhotos() {
    await this.createAlbumsAndMedia();
    this.saveLastUploadInfo();
  }

  private saveLastUploadInfo() {
    if (this.uploadingStatus == UploadingStatus.Success) {
      this.lastUploadInfoSubscription = this.lastUploadInfoService.updateLastUploadInfo().subscribe();
    }
  }

  // async/await + for...of loop to ensure sequential API calls
  // not working with arrays' forEach() method
  async createAlbumsAndMedia(): Promise<void> {
    this.uploadingStatus = UploadingStatus.InProgress;
    for (const group of this.mediaItemsGroups) {
      if (group.albumId == null) {
        await this.albumService.albums(group, this.googleLoginService.getAccessToken()!).toPromise().then(async (album) => {
          group.albumId = album.id;
          await this.createMedia(group);
        })
          .catch(() => this.uploadingStatus = UploadingStatus.Fail);
      } else {
        await this.createMedia(group);
      }
      // when API call error, then break the loop
      if (this.uploadingStatus != UploadingStatus.InProgress) break;
    }
    this.uploadingStatus = (this.getMediaItemsCount() == this.getUploadedCount()) ? UploadingStatus.Success : UploadingStatus.Fail;
  }

  async createMedia(group: MediaItemsGroup): Promise<void> {
    for (const item of group.mediaItemsForGrouping) {
      if (!item.mediaItem.uploadSuccess) {
        await this.mediaItemService.uploads(item.mediaItem, this.googleLoginService.getAccessToken()!).toPromise().then(async (uploadToken: string) => {
          await this.mediaItemService.batchCreate(item.mediaItem, uploadToken, this.googleLoginService.getAccessToken()!, group.albumId).toPromise().then(() => item.mediaItem.uploadSuccess = true)
            .catch(() => this.uploadingStatus = UploadingStatus.Fail);
        })
          .catch(() => this.uploadingStatus = UploadingStatus.Fail);
      }
    }
  }

  removeGroup(gr: MediaItemsGroup): void {
    this.mediaItemsGroups.splice(this.mediaItemsGroups.indexOf(gr), 1);
  }

  getUploadedCount(): number {
    let uploadedCount = 0;
    this.mediaItemsGroups.forEach((group) => {
      uploadedCount += group.getUploadedCount();
    })
    return uploadedCount;
  }

  getParamsTimeDiffs(): void {
    this.timeDiffGroup = this.paramsForm.get(['timeDiffGroup'])!.value;
  }

  getParamsResize(): void {
    this.resizeWidth = this.paramsForm.get(['resizeWidth'])!.value;
    this.resizeHeight = this.paramsForm.get(['resizeHeight'])!.value;
  }

  private emptyArraysExceptMediaItems(): void {
    this.mediaItemsForGrouping = [];
    this.mediaItemsGroups = [];
    this.groupsCreated = false;
    this.uploadingStatus = UploadingStatus.None;
  }

  changeParamsFormShow() {
    this.paramsFormShow ? this.paramsFormShow = false : this.paramsFormShow = true;
  }

}

export enum UploadingStatus {
  None = 'None',
  InProgress = 'InProgress',
  Success = 'Success',
  Fail = 'Fail'
}