import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthenticationService, private router: Router) { }

  login(): void {
    this.authService.login({ username: this.username, password: this.password }).subscribe(
      () => {
      
        const returnUrl = this.authService.getReturnUrl() || '/';
        this.router.navigateByUrl(returnUrl);
      },
      error => {
  
        console.error('Login failed:', error);
      }
    );
  }
}
