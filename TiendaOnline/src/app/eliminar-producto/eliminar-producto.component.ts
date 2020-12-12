import { Component, OnInit } from '@angular/core';
import { EliminarProductoService} from '../servicios/eliminar-producto.service';
import { CanActivate, Router } from '@angular/router';
@Component({
  selector: 'app-eliminar-producto',
  templateUrl: './eliminar-producto.component.html',
  styleUrls: ['./eliminar-producto.component.css']
})
export class EliminarProductoComponent implements OnInit {

  constructor(private router: Router,private serv_del_prod:EliminarProductoService) { }
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
