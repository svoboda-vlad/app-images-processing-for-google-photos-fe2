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

  getParametersDefault() : Observable<ParametersDefault> {
    return this.http.get<ParametersDefault>(environment.SERVER_URL + this.adminParametersDefaultUrl).pipe(
      catchError(this.errorResponseService.handleError));
  }

  updateParametersDefault(parameters: ParametersDefault) : Observable<ParametersDefault> {
    return this.http.put<ParametersDefault>(environment.SERVER_URL + this.adminParametersDefaultUrl, parameters).pipe(
      catchError(this.errorResponseService.handleError));
  }
}

export class ParametersDefault {
  timeDiffGroup: number;
	resizeWidth: number;
	resizeHeight: number;

  constructor(timeDiffGroup: number, resizeWidth: number, resizeHeight: number) {
    this.timeDiffGroup = timeDiffGroup;
    this.resizeWidth = resizeWidth;
    this.resizeHeight = resizeHeight;
  }
}
