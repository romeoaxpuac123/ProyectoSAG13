import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  constructor(private http:HttpClient) {  }
  API_URI='http://www.sa-proyecto.tk/api/MiCarrito';
  API_URI2='http://www.sa-proyecto.tk/api/EliminarCarrito';
  API_URI3='http://www.sa-proyecto.tk/api/Stock';

  get_productos(id:string){

    return this.http.post(`${this.API_URI}`,{id:id});
    
  }

  eliminar(id:string){

    return this.http.post(`${this.API_URI2}`,{id:id});
    
  }

  verificar_stock(id:string){

    return this.http.post(`${this.API_URI3}`,{id:id});
    
  }

}
