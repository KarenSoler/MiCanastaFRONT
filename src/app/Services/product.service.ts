import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product} from '../Models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiURL: String = 'https://micanasta-app.herokuapp.com';

  constructor(
    private http: HttpClient
  ) { }
  createProduct(formData){
    return this.http.post<Product>(`${this.apiURL}/product/create`, formData)
  }

  getAll(){
    return this.http.get(`${this.apiURL}/product/getAll`)
  }

  getProduct(filter){
    return this.http.get<Product[]>(`${this.apiURL}/product/getProduct/${filter}`)
  }

  updateProduct(formData, idproduct){
    return this.http.put<Product>(`${this.apiURL}/product/update/${idproduct}`, formData)
  }

}
