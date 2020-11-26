import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {} from '../Models/localidades';

@Injectable({
  providedIn: 'root'
})
export class LocalidadesService {

  apiURL: String = 'https://micanasta-app.herokuapp.com';

  constructor(
    private http: HttpClient
  ) { }

  getAll(){
    return this.http.get(`${this.apiURL}/localides/getAll`)
  }

}
