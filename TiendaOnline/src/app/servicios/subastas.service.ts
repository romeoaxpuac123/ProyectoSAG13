import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubastasService {

  
  constructor(private http:HttpClient) { }
  API_URI='http://34.121.67.41:8003/Apostar';
  API_URI2='http://34.121.67.41:8003/FinApuesta';

  apostar(id_cliente:string,id_Producto:string,precio_subaste:string){

    return this.http.post(`${this.API_URI}`,{id_cliente:id_cliente,id_Producto:id_Producto,precio_subaste:precio_subaste});
    
  }


  cerrar_apuesta(Nombre:string,id_Producto:string,cantidad:string,precio:string){

    return this.http.post(`${this.API_URI2}`,{Nombre:Nombre,id_Producto:id_Producto,cantidad:cantidad,precio:precio});
    
  }
}
