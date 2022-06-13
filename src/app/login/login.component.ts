import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'ipfgp-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private fb: FormBuilder,
    private router: Router) {       
    }

  logInWithGoogle(): void {
    location.href = "https://accounts.google.com/o/oauth2/v2/auth?client_id=" + environment.GOOGLE_CLIENT_ID
    + "&redirect_uri=" + environment.FRONT_END_URL + "google-login&response_type=id_token%20token&scope=profile%20email%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fphotoslibrary.appendonly&nonce=abcdef";
  }

}
