import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ErrorResponseService } from '../shared/error-response.service';

@Injectable({
  providedIn: 'root'
})
export class ParametersService {

  parametersUrl = 'parameters';
  parametersResetToDefaultUrl = 'parameters-reset-to-default';

  constructor(private http: HttpClient,
    private errorResponseService: ErrorResponseService) { }

  getParameters() : Observable<Parameters> {
    return this.http.get<Parameters>(environment.SERVER_URL + this.parametersUrl).pipe(
      catchError(this.errorResponseService.handleError));
  }

  updateParameters(parameters: Parameters) : Observable<Parameters> {
    return this.http.put<Parameters>(environment.SERVER_URL + this.parametersUrl, parameters).pipe(
      catchError(this.errorResponseService.handleError));
  }

  resetToDefault() : Observable<void> {
    return this.http.get<void>(environment.SERVER_URL + this.parametersResetToDefaultUrl).pipe(
      catchError(this.errorResponseService.handleError));
  }
}

export class Parameters {
  timeDiffGroup: number;
	resizeWidth: number;
	resizeHeight: number;

  constructor(timeDiffGroup: number, resizeWidth: number, resizeHeight: number) {
    this.timeDiffGroup = timeDiffGroup;
    this.resizeWidth = resizeWidth;
    this.resizeHeight = resizeHeight;
  }
}

