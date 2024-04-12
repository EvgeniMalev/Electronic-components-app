import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Component } from '../../models/component.model';

@Injectable({
  providedIn: 'root'
})
export class ComponentService {
  private apiUrl = 'http://example.com/api/components'; // Replace with your backend API URL

  constructor(private http: HttpClient) { }

  getAllComponents(): Observable<Component[]> {
    return this.http.get<Component[]>(this.apiUrl);
  }

  getComponent(id: number): Observable<Component> {
    return this.http.get<Component>(`${this.apiUrl}/${id}`);
  }

  addComponent(component: Component): Observable<Component> {
    return this.http.post<Component>(this.apiUrl, component);
  }

  updateComponent(component: Component): Observable<Component> {
    return this.http.put<Component>(`${this.apiUrl}/${component.id}`, component);
  }

  deleteComponent(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
