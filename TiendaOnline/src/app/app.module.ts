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
import { PantallaClienteComponent } from './pantalla-cliente/pantalla-cliente.component';
import { NavBarClienteComponent } from './nav-bar-cliente/nav-bar-cliente.component';
import { PerfilClienteComponent } from './perfil-cliente/perfil-cliente.component';
import { PantallaProveedorComponent } from './pantalla-proveedor/pantalla-proveedor.component';
import { NavBarProveedorComponent } from './nav-bar-proveedor/nav-bar-proveedor.component';
import { PerfilProveedorComponent } from './perfil-proveedor/perfil-proveedor.component';
import { AgregarProductoComponent } from './agregar-producto/agregar-producto.component';
import { ActualizarProductoComponent } from './actualizar-producto/actualizar-producto.component';
import { EliminarProductoComponent } from './eliminar-producto/eliminar-producto.component';
import { ProductosProveedorComponent } from './productos-proveedor/productos-proveedor.component';
import { ProductosClienteComponent } from './productos-cliente/productos-cliente.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PantallaInicialComponent,
    PiePaginaComponent,
    LoginClienteComponent,
    RegistroProveedorComponent,
    RegistroClienteComponent,
    PantallaClienteComponent,
    NavBarClienteComponent,
    PerfilClienteComponent,
    PantallaProveedorComponent,
    NavBarProveedorComponent,
    PerfilProveedorComponent,
    AgregarProductoComponent,
    ActualizarProductoComponent,
    EliminarProductoComponent,
    ProductosProveedorComponent,
    ProductosClienteComponent
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
