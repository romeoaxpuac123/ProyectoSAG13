import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AgregarAlCarritoService {

  constructor(private http:HttpClient) {  }
  API_URI='http://www.sa-proyecto.tk/api/AgregarACarrito';

  agregar_carrito(id_cliente:string,Nombre:string,id_Producto:string,cantidad:string,precio:string){

    return this.http.post(`${this.API_URI}`,{id_cliente:id_cliente,Nombre:Nombre,id_Producto:id_Producto,cantidad:cantidad,precio:precio});
    
  }
}
