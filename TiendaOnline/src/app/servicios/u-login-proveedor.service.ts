import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ULoginProveedorService {

  constructor(private http:HttpClient) { }



  GuardarUsuario(api:string,email:string,contrasena:string){

    return this.http.post(`${api}`,{email:email,contrasena:contrasena});
    
  }


}
