import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardComprasService {

 
  constructor(private http:HttpClient) {  }
  API_URI='http://34.121.67.41:9003/TodasLasCompras';
  API_URI2='http://34.121.67.41:9003/ModificarEstado';
  
  get_compras(id:string){

    return this.http.post(`${this.API_URI}`,{id:id});
    
  }

  cambiar_estado(id:string,estado:string){

    return this.http.post(`${this.API_URI2}`,{id:id,estado:estado});
    
  }
}
