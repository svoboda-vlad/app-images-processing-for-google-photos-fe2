import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, Subscription, throwError } from 'rxjs';
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
  closeResult = '';
  parametersResetToDefaultSubscription!: Subscription;
  parametersResetToDefaultError = false;

  constructor(private parametersService: ParametersService,
    private modalService: NgbModal) {
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

  open(content: any) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  resetToDefault(): void {
    this.parametersResetToDefaultSubscription = this.parametersService
    .resetToDefault()
      .subscribe(
        () => {
          this.parametersResetToDefaultError = false;
          this.ngOnInit();
        },
        () => this.parametersResetToDefaultError = true
      );    
  }

  ngOnDestroy() {
    if (this.parametersResetToDefaultSubscription != null) this.parametersResetToDefaultSubscription.unsubscribe();
  }  
}

