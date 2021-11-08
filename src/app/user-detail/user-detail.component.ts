import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, Subscription, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { LoginService } from '../login/login.service';
import { User, UserService } from '../user/user.service';

@Component({
  selector: 'ipfgp-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit, OnDestroy {

  user$: Observable<User> | null = null;
  error: Object | null = null;
  deleteUserSubscription: Subscription | null = null;
  deleteError: Object | null = null;
  closeResult = '';

  constructor(private userService: UserService, private route: ActivatedRoute,
    private router: Router, private loginService: LoginService,
    private modalService: NgbModal) {
  }

  ngOnInit(): void {
    this.user$ = this.userService.getCurrentUser()
      .pipe(
        catchError((err) => {
          this.router.navigate(['/login']);
          return throwError(err);
        })
      );
  }

  ngOnDestroy() {
    if (this.deleteUserSubscription != null) this.deleteUserSubscription.unsubscribe();
  }

  deleteUser() {
    this.deleteUserSubscription = this.userService.deleteUser()
      .subscribe(() => {
        this.deleteError = false;
        this.loginService.logOut();
        this.userService.logOut();
        this.router.navigate(['/login']);
      },
        () => this.deleteError = true);
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

}
