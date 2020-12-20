import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteEliminarProductoService } from '../servicios/cliente-eliminar-producto.service';

@Component({
  selector: 'app-cliente-eliminar-producto',
  templateUrl: './cliente-eliminar-producto.component.html',
  styleUrls: ['./cliente-eliminar-producto.component.css']
})
export class ClienteEliminarProductoComponent implements OnInit {

  constructor(private router: Router,private serv_del_prod:ClienteEliminarProductoService) { }
  listainfo:any=[];
  id:string="";
  
  placeholders = {
    'id':'Código de producto'
  };

  ngOnInit(): void {
  }

  eliminarProducto(){
    
    this.serv_del_prod.eliminar_producto(this.id).subscribe(
      result=>{console.log(result)
               this.listainfo=result;
               console.log(this.listainfo.msg);
               if(this.listainfo.msg==true){
                  alert("Producto eliminado con éxito.");
                  window.location.reload();
               }else{
                alert("Hubo un problema.");

               }
      },
      error=>{console.log(error)
      });
  }


}
