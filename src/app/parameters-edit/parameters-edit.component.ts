import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription, Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ParametersService, Parameters } from '../parameters/parameters.service';

@Component({
  selector: 'ipfgp-parameters-edit',
  templateUrl: './parameters-edit.component.html',
  styleUrls: ['./parameters-edit.component.scss']
})
export class ParametersEditComponent implements OnInit {

  parametersUpdateError = false;
  error!: Object;
  parametersUpdateSubscription!: Subscription;
  parameters$!: Observable<Parameters>;
  parametersObject!: Parameters;

  parametersEditForm = this.fb.group({
    timeDiffGroup: [null, [Validators.required, Validators.min(60), Validators.max(86400)]],
    resizeWidth: [null, [Validators.required, Validators.min(1), Validators.max(10000)]],
    resizeHeight: [null, [Validators.required, Validators.min(1), Validators.max(10000)]]
  });

  constructor(private fb: FormBuilder,
    private router: Router,
    private parametersService: ParametersService
  ) { }

  ngOnInit(): void {
      this.parameters$ = this.parametersService.getParameters().pipe(
        map(parameters => {
          this.parametersObject = parameters;
          this.parametersEditForm.patchValue({
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

  updateParameters(): void {
    const parameters: Parameters = new Parameters(
      this.parametersEditForm.get('timeDiffGroup')!.value,
      this.parametersEditForm.get('resizeWidth')!.value,
      this.parametersEditForm.get('resizeHeight')!.value
    );
    this.parametersUpdateSubscription = this.parametersService
      .updateParameters(parameters)
      .subscribe(
        () => {
          this.parametersUpdateError = false;
          this.router.navigate(['/parameters']);
        },
        () => this.parametersUpdateError = true
      );
  }

  get timeDiffGroup() { return this.parametersEditForm.get('timeDiffGroup'); }

  get resizeWidth() { return this.parametersEditForm.get('esizeWidth'); }

  get resizeHeight() { return this.parametersEditForm.get('resizeHeight'); }

  ngOnDestroy() {
    if (this.parametersUpdateSubscription != null) this.parametersUpdateSubscription.unsubscribe();
  }

}

