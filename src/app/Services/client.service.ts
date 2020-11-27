import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente} from '../Models/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  apiURL: String = 'https://micanasta-app.herokuapp.com';

  constructor(
    private http: HttpClient
  ) { }
  
  createConsumidor(formData){
    return this.http.post<Cliente>(`${this.apiURL}/cliente/create`,formData)
  }
  login(formData){
    return this.http.post<Cliente>(`${this.apiURL}/login`, formData)
  }
}