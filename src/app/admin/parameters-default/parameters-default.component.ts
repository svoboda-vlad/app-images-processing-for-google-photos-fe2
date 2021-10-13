import { Component, OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ParametersDefaultService, ProcessingParametersDefault } from './parameters-default.service';

@Component({
  selector: 'ipfgp-parameters-default',
  templateUrl: './parameters-default.component.html',
  styleUrls: ['./parameters-default.component.scss']
})
export class ParametersDefaultComponent implements OnInit {

  parametersDefault$: Observable<ProcessingParametersDefault> | null = null;
  error: Object | null = null;

  constructor(private parametersDefaultService: ParametersDefaultService) {
  }

  ngOnInit(): void {
    this.parametersDefault$ = this.parametersDefaultService.getParametersDefault()
      .pipe(
        catchError(err => {
          this.error = err;
          return throwError(err);
        })
      );
  }

}
