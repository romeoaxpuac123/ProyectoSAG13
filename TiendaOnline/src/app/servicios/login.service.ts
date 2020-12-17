import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  constructor(private http:HttpClient) { }

  API_URI='http://34.121.67.41:3003/authProveedor';

  GuardarUsuario(usuario:string,password:string){

    return this.http.post(`${this.API_URI}`,{email:usuario,pass:password});
    
  }


}
