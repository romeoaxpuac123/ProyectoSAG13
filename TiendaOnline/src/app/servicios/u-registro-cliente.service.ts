import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class URegistroClienteService {

  constructor(private http:HttpClient) { }
  
  

  enviarDatos(api:string,nombre:string,apellido:string,contrasena:string,email:string,celular:string){

    return this.http.post(`${api}`,{nombre:nombre,apellido:apellido,email:email,contrasena:contrasena,celular:celular});
    
  }
}
