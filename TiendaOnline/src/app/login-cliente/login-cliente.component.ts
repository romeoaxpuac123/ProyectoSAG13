import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-cliente',
  templateUrl: './login-cliente.component.html',
  styleUrls: ['./login-cliente.component.css']
})
export class LoginClienteComponent implements OnInit {

  placeholders = {
    'username': 'Nombre de usuario',
    'userpass': 'Contraseña'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
