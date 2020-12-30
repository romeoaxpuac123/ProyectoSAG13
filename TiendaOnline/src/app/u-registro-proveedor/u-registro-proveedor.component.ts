import { Component, OnInit } from '@angular/core';
import { URegistroProveedorService } from '../servicios/u-registro-proveedor.service';
@Component({
  selector: 'app-u-registro-proveedor',
  templateUrl: './u-registro-proveedor.component.html',
  styleUrls: ['./u-registro-proveedor.component.css']
})
export class URegistroProveedorComponent implements OnInit {

  constructor(private servicio_prov:URegistroProveedorService) { }

  ngOnInit(): void {
    this.apis=["http://busg1.us-e2.cloudhub.io/registrar-proveedor",
                "",
                "http://35.206.98.190/registrar-proveedor",
                "http://esb4.djgg.ml:3030/registrar-proveedor",
                "http://34.123.238.63:8280/services/integrador/registrar-proveedor",
                "http://35.184.63.236:3004/registrar-proveedor",
                "http://68.183.102.104:3000/registrar-proveedor",
                "http://35.232.242.252:9999/registrar-proveedor",
                "http://sa-g9.us-e2.cloudhub.io/registrar-proveedor",
                "http://34.73.157.172:5005/registrar-proveedor",
                "http://soagrupo11.us-e2.cloudhub.io/registrar-proveedor"];
  }

  placeholders = {
    'nombre': 'Nombres',
    'apellido': 'Apellidos',
    'empresa': 'Nombre de empresa',
    'email': 'Correo electrónico',
    'userpass': 'Contraseña',
    'direccion': 'Dirección'
  };

  grupo:number=0;
  nombre:string="";
  apellido:string="";
  empresa:string="";
  email:string="";
  password:string="";
  direccion:string="";
  listainfo:any=[];
  apis:any=[];
  registrarProveedor(){
   
    //this.nombreRecibido = this.user;
    //this.passRecibida = this.pass;
    this.servicio_prov.enviarDatos(this.apis[this.grupo-1],this.nombre,this.apellido,this.empresa,this.email,this.password,this.direccion).subscribe(
      result=>{console.log(result)
               this.listainfo=result;
               console.log(this.listainfo.msg);
               if(this.listainfo.status=="success"){
                  alert("Registro exitoso");
                  window.location.reload();
               }else{
                alert("usuario no valido");

               }
      },
      error=>{console.log(error)
      });
  }

  seleccionar_grupo(grupo:string){
    this.grupo=Number(grupo);
    
}


}
