import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-u-nav-bar-proveedor',
  templateUrl: './u-nav-bar-proveedor.component.html',
  styleUrls: ['./u-nav-bar-proveedor.component.css']
})
export class UNavBarProveedorComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  cerrar_sesion(){
    localStorage.setItem("credenciales","");
    this.router.navigate(['/welcome']);

  }

}
