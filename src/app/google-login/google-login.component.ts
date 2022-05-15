import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { UserService } from '../user/user.service';

@Component({
  selector: 'ipfgp-google-login',
  templateUrl: './google-login.component.html',
  styleUrls: ['./google-login.component.scss']
})
export class GoogleLoginComponent implements OnInit {

  accessTokenKey = "access_token";
  idTokenKey = "id_token";  
  error: Object | null = null;
  googleLogin$: Observable<void> | null = null;

  constructor(private router: Router,
    private userService: UserService) { }

  ngOnInit(): void {
    let accessToken = "";
    let idToken = "";
    const hashParams = location.hash.replace("#","").split("&");
    hashParams.forEach((param) => {
      const p = param.split("=");
      if (p[0] == "access_token") accessToken = p[1];
      if (p[0] == "id_token") idToken = p[1];
    });
    localStorage.setItem(this.accessTokenKey, accessToken);
    localStorage.setItem(this.idTokenKey, idToken);    

    this.googleLogin$ = this.userService.getCurrentUser().pipe(
      map(() => {
        this.router.navigate(['images-processing']);
      }),
      catchError(err => {
        this.error = err;
        return throwError(err);
      })
      );
  }

}
