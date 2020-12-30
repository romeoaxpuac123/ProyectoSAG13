import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class URegistroProveedorService {

 
  constructor(private http:HttpClient) { }


  enviarDatos(api:string,nombre:string,apellido:string,empresa:string,email:string,contrasena:string,direccion:string){

    return this.http.post(`${api}`,{nombre:nombre,apellido:apellido,empresa:empresa,email:email,contrasena:contrasena,direccion:direccion});
    
  }

}
