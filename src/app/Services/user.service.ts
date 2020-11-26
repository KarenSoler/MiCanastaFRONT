import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../Models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiURL: String = 'https://micanasta-app.herokuapp.com';
  constructor(
    private http: HttpClient
  ) { }

  createUser(formData){
    return this.http.post<User>(`${this.apiURL}/user/create`, formData)
  }

  login(formData){
    return this.http.post<User>(`${this.apiURL}/login `, formData)
  }
}
