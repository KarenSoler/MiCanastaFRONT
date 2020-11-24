import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Sugerencia } from '../Models/Sugerencia';


@Injectable({
  providedIn: 'root'
})
export class SugerenciaService {

  apiURL: String = 'https://micanasta-app.herokuapp.com';

  constructor(
    private http: HttpClient
  ) { }
  createSugerencia(formData){
    return this.http.post<Sugerencia>(`${this.apiURL}/sugerencia/create`, formData)
  }

  getAll(){
    return this.http.get(`${this.apiURL}/sugerencia/getAll`)
  }
/*
  updateSugerencia(formData, idSugerencia){
    return this.http.put<Sugerencia>(`${this.apiURL}/sugerencia/update/${idSugerencia}`, formData)
  }*/
}
