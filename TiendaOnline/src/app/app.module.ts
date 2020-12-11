import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { PantallaInicialComponent } from './pantalla-inicial/pantalla-inicial.component';
import { PiePaginaComponent } from './pie-pagina/pie-pagina.component';
import { LoginClienteComponent } from './login-cliente/login-cliente.component';
import { RegistroProveedorComponent } from './registro-proveedor/registro-proveedor.component';
import { RegistroClienteComponent } from './registro-cliente/registro-cliente.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PantallaInicialComponent,
    PiePaginaComponent,
    LoginClienteComponent,
    RegistroProveedorComponent,
    RegistroClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
