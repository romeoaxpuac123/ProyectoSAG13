import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RegistrarClienteService {

  constructor(private http:HttpClient) { }
  API_URI='http://www.sa-proyecto.tk/api/regisCliente';

  enviarDatos(nombre:string,apellido:string,password:string,email:string,celular:string,foto:string){

    return this.http.post(`${this.API_URI}`,{Nombre:nombre,Apellido:apellido,password:password,email:email,celular:celular,fotografia:foto});
    
  }

}
