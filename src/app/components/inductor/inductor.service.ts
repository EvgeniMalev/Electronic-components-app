import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Resistor } from '../../models/resistor.model';

@Injectable({
  providedIn: 'root'
})
export class InductorService {
  private apiUrl = 'http://example.com/api/resistors'; 

  constructor(private http: HttpClient) { }

  addResistor(resistor: Resistor): Observable<Resistor> {
    return this.http.post<Resistor>(this.apiUrl, resistor);
  }
}
