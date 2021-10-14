import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription, Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ParametersDefaultService, ParametersDefault } from '../parameters-default/parameters-default.service';

@Component({
  selector: 'ipfgp-parameters-default-edit',
  templateUrl: './parameters-default-edit.component.html',
  styleUrls: ['./parameters-default-edit.component.scss']
})
export class ParametersDefaultEditComponent implements OnInit {

  parametersDefaultUpdateError = false;
  error!: Object;
  parametersDefaultUpdateSubscription!: Subscription;
  parametersDefault$!: Observable<ParametersDefault>;
  parametersDefaultObject!: ParametersDefault;

  parametersDefaultEditForm = this.fb.group({
    timeDiffGroup: [null, [Validators.required, Validators.min(60), Validators.max(86400)]],
    resizeWidth: [null, [Validators.required, Validators.min(1), Validators.max(10000)]],
    resizeHeight: [null, [Validators.required, Validators.min(1), Validators.max(10000)]]
  });

  constructor(private fb: FormBuilder,
    private router: Router,
    private parametersDefaultService: ParametersDefaultService
  ) { }

  ngOnInit(): void {
      this.parametersDefault$ = this.parametersDefaultService.getParametersDefault().pipe(
        map(parametersDefault => {
          this.parametersDefaultObject = parametersDefault;
          this.parametersDefaultEditForm.patchValue({
            timeDiffGroup: parametersDefault.timeDiffGroup,
            resizeWidth: parametersDefault.resizeWidth,
            resizeHeight: parametersDefault.resizeHeight
          });
          return parametersDefault;
        }),
        catchError(err => {
          this.error = err;
          return throwError(err);
        })
      )
  }

  updateParametersDefault(): void {
    const parametersDefault: ParametersDefault = new ParametersDefault(
      this.parametersDefaultEditForm.get('timeDiffGroup')!.value,
      this.parametersDefaultEditForm.get('resizeWidth')!.value,
      this.parametersDefaultEditForm.get('resizeHeight')!.value
    );
    this.parametersDefaultUpdateSubscription = this.parametersDefaultService
      .updateParametersDefault(parametersDefault)
      .subscribe(
        () => {
          this.parametersDefaultUpdateError = false;
          this.router.navigate(['/admin/parameters-default']);
        },
        () => this.parametersDefaultUpdateError = true
      );
  }

  get timeDiffGroup() { return this.parametersDefaultEditForm.get('timeDiffGroup'); }

  get resizeWidth() { return this.parametersDefaultEditForm.get('esizeWidth'); }

  get resizeHeight() { return this.parametersDefaultEditForm.get('resizeHeight'); }

  ngOnDestroy() {
    if (this.parametersDefaultUpdateSubscription != null) this.parametersDefaultUpdateSubscription.unsubscribe();
  }

}
