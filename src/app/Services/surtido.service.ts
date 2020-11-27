import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Surtido } from '../Models/surtido'

@Injectable({
  providedIn: 'root'
})
export class SurtidoService {

    apiURL: String = '//localhost:3000';
    constructor(
      private http: HttpClient
    ) { }

    getAll(){
        return this.http.get<Surtido[]>(`${this.apiURL}/surtido/getAll`)
      }

    create(surtido: Surtido) {
      return this.http.post(`${this.apiURL}/surtido/create`, surtido)
    }

    update(id: String, changes:Partial<Surtido>) {
      return this.http.put(`${this.apiURL}/surtido/update/${id}`,changes)
    }

    deleteOne(id: String) {
      return this.http.delete(`${this.apiURL}/surtido/delete/${id}`)
    }
}
