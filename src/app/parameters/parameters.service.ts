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

  adminParametersUrl = 'parameters';

  constructor(private http: HttpClient,
    private errorResponseService: ErrorResponseService) { }

  getParameters() : Observable<Parameters> {
    return this.http.get<Parameters>(environment.SERVER_URL + this.adminParametersUrl).pipe(
      catchError(this.errorResponseService.handleError));
  }

  updateParameters(parameters: Parameters) : Observable<Parameters> {
    return this.http.put<Parameters>(environment.SERVER_URL + this.adminParametersUrl, parameters).pipe(
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

