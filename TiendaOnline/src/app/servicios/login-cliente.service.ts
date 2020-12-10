import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginClienteService {

  constructor(private http:HttpClient) {  }
  API_URI='http://35.193.123.113:3003/authCliente';

  EnviarCredenciales(usuario:string,password:string){

    return this.http.post(`${this.API_URI}`,{email:usuario,pass:password});
    
  }


}
