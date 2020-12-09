import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  nombreRecibido = '';
  passRecibida = '';

  placeholders = {
    'username': 'Nombre de usuario',
    'userpass': 'Contraseña'
  };

  constructor() { }

  recibirDatos(nombre:HTMLInputElement,pass:HTMLInputElement) {
    this.nombreRecibido = nombre.value;
    this.passRecibida = pass.value;
  }

  ngOnInit() {
  }
}


