import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Capacitor } from '../../models/capacitor.model';
import { CapacitorService } from './capacitor.service';

@Component({
  selector: 'app-capacitor',
  templateUrl: './capacitor.component.html',
  styleUrls: ['./capacitor.component.css']
})
export class CapacitorComponent implements OnInit {
  capacitor: Capacitor;
  newCapacitor: Capacitor = { name: '', capacitance: null, tolerance: null, maxVoltage: null }; // New capacitor object

  constructor(private route: ActivatedRoute, private capacitorService: CapacitorService) { }

  ngOnInit(): void {
    this.getCapacitor();
  }

  getCapacitor(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.capacitorService.getCapacitor(id)
      .subscribe(capacitor => this.capacitor = capacitor);
  }

  onSubmit(): void {
    this.capacitorService.addCapacitor(this.newCapacitor)
      .subscribe(capacitor => {
        console.log('New capacitor added:', capacitor);
        // Optionally, reset the form or perform other actions after adding the capacitor
      });
  }
}
