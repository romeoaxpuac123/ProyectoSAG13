import { Component, OnInit } from '@angular/core';
import { RegistrarClienteService } from '../servicios/registrar-cliente.service';
@Component({
  selector: 'app-registro-cliente',
  templateUrl: './registro-cliente.component.html',
  styleUrls: ['./registro-cliente.component.css']
})
export class RegistroClienteComponent implements OnInit {

  constructor(private servicio_rc:RegistrarClienteService) { }

  ngOnInit(): void {
  }

  placeholders = {
    'nombre': 'Nombre',
    'apellido': 'Apellidos',
    'password': 'Contraseña',
    'email': 'Correo electrónico',
    'celular': 'Teléfono'
  };

  nombre:string="";
  apellido:string="";
  password:string="";
  email:string="";
  celular:string="";

  listainfo:any=[];

  registrarCliente(){
   
    //this.nombreRecibido = this.user;
    //this.passRecibida = this.pass;
    this.servicio_rc.enviarDatos(this.nombre,this.apellido,this.password,this.email,this.celular,"No foto").subscribe(
      result=>{console.log(result)
               this.listainfo=result;
               console.log(this.listainfo.msg);
               if(this.listainfo.msg==true){
                  alert("Registro exitoso!");
                  window.location.reload();
               }else{
                alert("usuario no valido");

               }
      },
      error=>{console.log(error)
      });
  }

}
