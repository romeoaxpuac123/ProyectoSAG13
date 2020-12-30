import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PagarFacturaService {

  constructor(private http:HttpClient) {  }
  API_URI='http://www.sa-proyecto.tk/api/Ventas';
  
  pagar_factura(id:string,numero_factura:string){

    return this.http.post(`${this.API_URI}`,{id:id,numero_factura:numero_factura});
    
  }
}
