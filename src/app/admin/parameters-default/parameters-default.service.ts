import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorResponseService } from 'src/app/shared/error-response.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ParametersDefaultService {

  adminParametersDefaultUrl = 'admin/parameters-default';

  constructor(private http: HttpClient,
    private errorResponseService: ErrorResponseService) { }

  getParametersDefault() : Observable<ProcessingParametersDefault> {
    return this.http.get<ProcessingParametersDefault>(environment.SERVER_URL + this.adminParametersDefaultUrl).pipe(
      catchError(this.errorResponseService.handleError));
  }

  updateParametersDefault(parameters: ProcessingParametersDefault) : Observable<ProcessingParametersDefault> {
    return this.http.put<ProcessingParametersDefault>(environment.SERVER_URL + this.adminParametersDefaultUrl, parameters).pipe(
      catchError(this.errorResponseService.handleError));
  }
}

export class ProcessingParametersDefault {
  timeDiffGroup: number;
	resizeWidth: number;
	resizeHeight: number;

  constructor(timeDiffGroup: number, resizeWidth: number, resizeHeight: number) {
    this.timeDiffGroup = timeDiffGroup;
    this.resizeWidth = resizeWidth;
    this.resizeHeight = resizeHeight;
  }
}
