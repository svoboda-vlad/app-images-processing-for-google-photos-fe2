import { Component, OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ParametersService, Parameters } from './parameters.service';

@Component({
  selector: 'ipfgp-parameters',
  templateUrl: './parameters.component.html',
  styleUrls: ['./parameters.component.scss']
})
export class ParametersComponent implements OnInit {

  parameters$: Observable<Parameters> | null = null;
  error: Object | null = null;

  constructor(private parametersService: ParametersService) {
  }

  ngOnInit(): void {
    this.parameters$ = this.parametersService.getParameters()
      .pipe(
        catchError(err => {
          this.error = err;
          return throwError(err);
        })
      );
  }

}

