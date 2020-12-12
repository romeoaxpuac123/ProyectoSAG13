import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginClienteComponent } from './login-cliente/login-cliente.component';
import { LoginComponent } from './login/login.component';
import { PantallaInicialComponent } from './pantalla-inicial/pantalla-inicial.component';
import { RegistroProveedorComponent } from './registro-proveedor/registro-proveedor.component';
import { RegistroClienteComponent } from './registro-cliente/registro-cliente.component';
import { PantallaClienteComponent } from './pantalla-cliente/pantalla-cliente.component';
import { PerfilClienteComponent } from './perfil-cliente/perfil-cliente.component';
import { PantallaProveedorComponent } from './pantalla-proveedor/pantalla-proveedor.component';
import { PerfilProveedorComponent } from './perfil-proveedor/perfil-proveedor.component';
import { AgregarProductoComponent } from './agregar-producto/agregar-producto.component';
import { ActualizarProductoComponent } from './actualizar-producto/actualizar-producto.component';
import { EliminarProductoComponent } from './eliminar-producto/eliminar-producto.component';
import { ProductosProveedorComponent } from './productos-proveedor/productos-proveedor.component';
import { ProductosClienteComponent } from './productos-cliente/productos-cliente.component';
const routes: Routes = [ 
  {path:'',redirectTo:'/welcome',pathMatch:'full'},
  { path: 'welcome', component: PantallaInicialComponent },
  { path: 'login', component: LoginComponent },
  { path: 'loginclient', component: LoginClienteComponent },
  { path: 'registerprov', component: RegistroProveedorComponent },
  { path: 'registercli', component: RegistroClienteComponent },
  { path: 'cliente', component: PantallaClienteComponent },
  { path: 'perfil-cliente', component: PerfilClienteComponent },
  { path: 'proveedor', component: PantallaProveedorComponent },
  { path: 'perfil-proveedor', component: PerfilProveedorComponent},
  { path: 'agregar-producto', component: AgregarProductoComponent},
  { path: 'actualizar-producto', component: ActualizarProductoComponent},
  { path: 'eliminar-producto', component: EliminarProductoComponent},
  { path: 'productos-proveedor', component: ProductosProveedorComponent},
  { path: 'productos-cliente', component: ProductosClienteComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
