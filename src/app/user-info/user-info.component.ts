import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { GoogleLoginService } from '../google-login/google-login.service';
import { DateUtilService } from '../shared/date-util.service';
import { User, UserService } from '../user/user.service';

@Component({
  selector: 'ipfgp-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  currentUser$: Observable<User> | null = null;
  error!: Object;

  constructor(private router: Router, 
    private userService: UserService, 
    private googleLoginService: GoogleLoginService,
    private dateUtilService: DateUtilService) { }

  ngOnInit(): void {
    this.currentUser$ = this.userService.getCurrentUser()
      .pipe(
        catchError((err) => {
          this.googleLoginService.logOut();
          this.userService.logOut();
          this.error = err;
          // this.router.navigate(['/login']);
          return throwError(err);
        })
      );
  }

  getDaysDiffFromToday(comparedDate: Date): number {
    return this.dateUtilService.getDaysDiffFromTodayDate(comparedDate);
  }

}
