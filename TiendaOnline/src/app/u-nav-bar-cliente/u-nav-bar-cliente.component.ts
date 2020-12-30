import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-u-nav-bar-cliente',
  templateUrl: './u-nav-bar-cliente.component.html',
  styleUrls: ['./u-nav-bar-cliente.component.css']
})
export class UNavBarClienteComponent implements OnInit {


  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  cerrar_sesion(){
    localStorage.setItem("credenciales","");
    this.router.navigate(['/welcome']);

  }

}
