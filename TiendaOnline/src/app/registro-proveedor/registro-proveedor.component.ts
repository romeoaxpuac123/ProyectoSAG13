import { Component, OnInit } from '@angular/core';
import { RegistrarProveedorService } from '../servicios/registrar-proveedor.service';
@Component({
  selector: 'app-registro-proveedor',
  templateUrl: './registro-proveedor.component.html',
  styleUrls: ['./registro-proveedor.component.css']
})
export class RegistroProveedorComponent implements OnInit {

  constructor(private servicio_prov:RegistrarProveedorService) { }

  ngOnInit(): void {
  }

  placeholders = {
    'empresa': 'Ingresa el nombre de tu empresa',
    'email': 'Correo electrónico',
    'userpass': 'Contraseña',
    'direccion': 'Dirección'
  };

  empresa:string="";
  email:string="";
  password:string="";
  direccion:string="";
  listainfo:any=[];

  registrarProveedor(){
   
    //this.nombreRecibido = this.user;
    //this.passRecibida = this.pass;
    this.servicio_prov.enviarDatos(this.empresa,this.email,this.password,this.direccion).subscribe(
      result=>{console.log(result)
               this.listainfo=result;
               console.log(this.listainfo.msg);
               if(this.listainfo.msg==true){
                  alert("usuario valido");

               }else{
                alert("usuario no valido");

               }
      },
      error=>{console.log(error)
      });
  }


}
