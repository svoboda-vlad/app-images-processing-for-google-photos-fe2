import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ErrorResponseService } from '../shared/error-response.service';

@Injectable({
  providedIn: 'root'
})
export class LastUploadInfoService {

  lastUploadInfoUrl = 'last-upload-info';
  lastUploadInfoUpdateUrl = 'last-upload-info-update';

  constructor(private http: HttpClient,
    private errorResponseService: ErrorResponseService) { }

  getLastUploadInfo() : Observable<LastUploadInfo> {
    return this.http.get<LastUploadInfo>(environment.SERVER_URL + this.lastUploadInfoUrl).pipe(
      catchError(this.errorResponseService.handleError));
  }

  updateLastUploadInfo() : Observable<LastUploadInfo> {
    return this.http.get<LastUploadInfo>(environment.SERVER_URL + this.lastUploadInfoUpdateUrl).pipe(
      catchError(this.errorResponseService.handleError));
  }

}

export class LastUploadInfo {
  lastUploadDateTime: Date;

  constructor(lastUploadDateTime: Date) {
    this.lastUploadDateTime = lastUploadDateTime;
  }
}