import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Barrio} from '../Models/barrio';


@Injectable({
  providedIn: 'root'
})
export class BarrioService {

  apiURL: String = 'https://micanasta-app.herokuapp.com';

  constructor(
    private http:HttpClient
  ) { }

  createBarrio(formData){
    return this.http.post<Barrio>(`${this.apiURL}/barrio/create`, formData)
  }

  getAll(){
    return this.http.get(`${this.apiURL}/barrio/getAll`) 
  }
}


