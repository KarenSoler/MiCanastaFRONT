import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tendero } from '../Models/Tendero';

@Injectable({
  providedIn: 'root'
})
export class TenderoService {

  apiURL: String = 'https://micanasta-app.herokuapp.com';

  constructor(
    private http: HttpClient
  ) { }

  createTendero(formData){
    return this.http.post<Tendero>(`${this.apiURL}/tendero/create`,formData)
  }
  login(formData){
    return this.http.post<Tendero>(`${this.apiURL}/login`, formData)
  }
}