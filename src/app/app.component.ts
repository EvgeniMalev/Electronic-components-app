import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true
})
export class AppComponent {
  constructor(private router: Router) {}

  navigateToTwo(): void {
    this.router.navigate(['/two']);
  }
}
