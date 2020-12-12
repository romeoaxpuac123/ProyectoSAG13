import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SesionesService {

  constructor() { }

 guardar_sesion(id:string,email:string,tipo:string){
    let usuario ={
      identificador:id,
      email:email,
      tipo:tipo
    }
    localStorage.setItem("credenciales",JSON.stringify(usuario));
  }
}
