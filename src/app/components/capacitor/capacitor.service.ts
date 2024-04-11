import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Capacitor } from '../../models/capacitor.model';

@Injectable({
  providedIn: 'root'
})
export class CapacitorService {
  private apiUrl = 'http://example.com/api/capacitors'; 

  constructor(private http: HttpClient) { }

  addCapacitor(capacitor: Capacitor): Observable<Capacitor> {
    return this.http.post<Capacitor>(this.apiUrl, capacitor);
  }
