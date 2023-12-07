import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// const endPointUser = "users"
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
              private http : HttpClient) {

              }


    getAll(){
      return this.http.get(environment.baseUrl);
    }
    getById(id:any){
      return this.http.get(environment.baseUrl+"/"+id);
    }
    //Get User
    registerData(inputData:any){
      return this.http.post(environment.baseUrl, inputData);
    }
    //Get User and Update
    updateData(id:any, inputData:any){
      return this.http.put(environment.baseUrl+"/"+id ,inputData);
    }
    //Get Username
    isLoggedIn(){
      return localStorage.getItem('username')!=null;
    }
    //Get User Role
    getUserRole(){
      return localStorage.getItem('role')!=null ? localStorage.getItem('role')?.toString():'';
    }
}
