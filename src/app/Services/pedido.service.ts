import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Pedido } from '../Models/pedido'

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

    apiURL: String = 'https://micanasta-app.herokuapp.com';
    constructor(
      private http: HttpClient
    ) { }

    getAll(){
        return this.http.get<Pedido[]>(`${this.apiURL}/pedido/getAll`)
      }

    create(pedido: Pedido) {
      return this.http.post(`${this.apiURL}/pedido/create`, pedido)
    }

    update(id: String, changes:Partial<Pedido>) {
      return this.http.put(`${this.apiURL}/pedido/update/${id}`,changes)
    }

    deleteOne(id: String) {
      return this.http.delete(`${this.apiURL}/pedido/delete/${id}`)
    }
}
