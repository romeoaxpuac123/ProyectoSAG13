import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  constructor(private http:HttpClient) { }

  API_URI='http://www.sa-proyecto.tk/api/authProveedor';

  GuardarUsuario(usuario:string,password:string){

    return this.http.post(`${this.API_URI}`,{email:usuario,pass:password});
    
  }


}
