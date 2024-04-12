import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username: string = '';
  email: string = '';
  password: string = '';

  constructor(private userService: UserService, private router: Router) { }

  register(): void {
    
    this.userService.register({ username: this.username, email: this.email, password: this.password }).subscribe(
      () => {
        
        this.router.navigateByUrl('/login');
      },
      error => {
        
        console.error('Registration failed:', error);
      }
    );
  }
}
