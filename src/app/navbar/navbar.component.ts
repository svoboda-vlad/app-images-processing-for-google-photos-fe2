import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user/user.service';
import { GoogleLoginService } from '../google-login/google-login.service';

@Component({
  selector: 'ipfgp-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  collapsed = true;

  constructor(private googleLoginService: GoogleLoginService,
    private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
  }

  isLoggedIn(): boolean {
    return this.userService.isLoggedIn();
  }

  isAdmin(): boolean {
    return this.userService.isAdmin();
  }

  logout(): void {
    this.googleLoginService.logOut();
    this.userService.logOut();
    this.router.navigate(['']);
  }

}
