import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError, map } from 'rxjs/operators';
import { ErrorResponseService } from '../shared/error-response.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userUrl = 'user';
  private user: User | null = null;

  constructor(private http: HttpClient,
    private errorResponseService: ErrorResponseService) { }

  getCurrentUser() : Observable<User> {
    return this.http.get<User>(environment.SERVER_URL + this.userUrl)
    .pipe(map(res => this.user = res),
    catchError(this.errorResponseService.handleError));
  }

  isLoggedIn(): boolean {
    return this.user !== null;
  }

  isAdmin(): boolean {
    if (this.user == null) return false;
    return this.user.userRoles.filter(r => r.role.name == 'ROLE_ADMIN').length != 0;
  }

  logOut(): void {
    this.user = null;
  }

  deleteUser() : Observable<void> {
    return this.http.delete<void>(environment.SERVER_URL + this.userUrl).pipe(
      catchError(this.errorResponseService.handleError));
  }

}

export class User {
  username: string;
  email: string;
  givenName: string;
  familyName: string;
  userRoles: UserRoles[];

  constructor(username: string, email: string, givenName: string, familyName: string, userRoles: UserRoles[]) {
      this.username = username;
      this.givenName = givenName;
      this.familyName = familyName;
      this.email = email;
      this.userRoles = userRoles;
    }

}

export class UserRoles {
  role: Role;

  constructor(role: Role) {
    this.role = role;
  }
}

export class Role {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}