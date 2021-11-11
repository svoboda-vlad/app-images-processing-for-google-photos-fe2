import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorResponseService } from '../shared/error-response.service';
import * as dayjs from 'dayjs';

@Injectable({
  providedIn: 'root'
})
export class MediaItemService {

  public uploadsUrl = 'https://photoslibrary.googleapis.com/v1/uploads';
  public batchCreateUrl = 'https://photoslibrary.googleapis.com/v1/mediaItems:batchCreate';

  constructor(private http: HttpClient,
    private errorResponseService: ErrorResponseService) { }

  uploads(mediaItem: MediaItem, accessToken: string): Observable<string> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + accessToken,
        'Content-type': 'application/octet-stream',
        'X-Goog-Upload-Content-Type': 'mime-type',
        'X-Goog-Upload-Protocol': 'raw'
      }),
      observe: "body" as const,
      responseType: "text" as const
    };
    return this.http.post(this.uploadsUrl, mediaItem.contentBytes, httpOptions).pipe(catchError(this.errorResponseService.handleError));
  }

  batchCreate(mediaItem: MediaItem, uploadToken: string, accessToken: string, albumId?: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + accessToken,
        'Content-type': 'application/json'
      })
    };

    const body = {
      "albumId": albumId,
      "newMediaItems": [
        {
          "description": "",
          "simpleMediaItem": {
            "fileName": mediaItem.name,
            "uploadToken": uploadToken
          }
        }
      ]
    }

    return this.http.post(this.batchCreateUrl, body, httpOptions).pipe(catchError(this.errorResponseService.handleError));
  }

}

export class MediaItem {
  name: string;
  dateTime: dayjs.Dayjs;
  contentBytes: string | ArrayBuffer;
  contentUrl: string | ArrayBuffer;
  uploadSuccess: boolean = false;

  constructor(name: string, dateTime: dayjs.Dayjs, contentBytes: string | ArrayBuffer, contentUrl: string | ArrayBuffer) { 
    this.name = name;
    this.dateTime = dateTime;
    this.contentBytes = contentBytes;
    this.contentUrl = contentUrl;
    this.uploadSuccess = this.uploadSuccess;
  }
}

export class MediaItemForGrouping {
  mediaItem: MediaItem;
  seqNo: number;
  timeDiff: number;

  constructor(mediaItem: MediaItem, seqNo: number, timeDiff: number) {
    this.mediaItem = mediaItem;
    this.seqNo = seqNo;
    this.timeDiff = timeDiff;
  }
}

export class MediaItemsGroup {
  id: number;
  startTime: dayjs.Dayjs;
  endTime: dayjs.Dayjs;
  mediaItemsForGrouping: MediaItemForGrouping[];
  name: string;
  albumId?: string;
  show: boolean;
  largePreview: boolean;

  constructor(id: number, startTime: dayjs.Dayjs, endTime: dayjs.Dayjs, mediaItemsForGrouping: MediaItemForGrouping[], name: string) {
    this.id = id;
    this.startTime = startTime;
    this.endTime = endTime;
    this.mediaItemsForGrouping = mediaItemsForGrouping;
    this.name = name;
    this.show = true;
    this.largePreview = true;
  }

  getUploadedCount() : number {
    return this.mediaItemsForGrouping.filter((item) => item.mediaItem.uploadSuccess).length;
  }
}