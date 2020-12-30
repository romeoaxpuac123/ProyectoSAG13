import { Component, OnInit } from '@angular/core';
import { URegistroClienteService } from '../servicios/u-registro-cliente.service';
@Component({
  selector: 'app-u-registro-cliente',
  templateUrl: './u-registro-cliente.component.html',
  styleUrls: ['./u-registro-cliente.component.css']
})
export class URegistroClienteComponent implements OnInit {

  constructor(private servicio_rc:URegistroClienteService) { }

  ngOnInit(): void {
    this.apis=["http://busg1.us-e2.cloudhub.io/registrar-cliente","","http://35.206.98.190/registrar-cliente","http://esb4.djgg.ml:3030/registrar-cliente","http://34.123.238.63:8280/services/integrador/registrar-cliente","http://35.184.63.236:3004/registrar-cliente","http://68.183.102.104:3000/registrar-cliente","http://35.232.242.252:9999/registrar-cliente","http://sa-g9.us-e2.cloudhub.io/registrar-cliente","http://34.73.157.172:5005/registrar-cliente","http://soagrupo11.us-e2.cloudhub.io/registrar-cliente"];
  }

  placeholders = {
    'nombre': 'Nombre',
    'apellido': 'Apellidos',
    'password': 'Contraseña',
    'email': 'Correo electrónico',
    'celular': 'Teléfono'
  };

  grupo:number=0;
  nombre:string="";
  apellido:string="";
  password:string="";
  email:string="";
  celular:string="";

  listainfo:any=[];
  apis:any=[];

  registrarCliente(){ 
    

    //this.nombreRecibido = this.user;
    //this.passRecibida = this.pass;
    this.servicio_rc.enviarDatos(this.apis[this.grupo-1],this.nombre,this.apellido,this.password,this.email,this.celular).subscribe(
      result=>{console.log(result)
               this.listainfo=result;
               console.log(this.listainfo.msg);
               if(this.listainfo.status=="success"){
                  alert("Registro exitoso!");
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
