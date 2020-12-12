import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RegistrarProveedorService {

  
  constructor(private http:HttpClient) { }
  API_URI='http://35.193.123.113:3003/regisProveedor';

  enviarDatos(empresa:string,email:string,password:string,direccion:string){

    return this.http.post(`${this.API_URI}`,{empresa:empresa,email:email,password:password,direccion:direccion});
    
  }

}
