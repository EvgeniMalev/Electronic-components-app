import { Component } from '@angular/core';

@Component({
  selector: 'app-resistor',
  templateUrl: './resistor.component.html',
  styleUrls: ['./resistor.component.css']
})
export class ResistorComponent {
  value: string = '';
  tolerance: string = '';
  powerRating: string = '';

  addResistor() {
    // Add logic to save resistor properties
  }
}
