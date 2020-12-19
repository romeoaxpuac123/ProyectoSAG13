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
import { AgregarTarjetaComponent } from './agregar-tarjeta/agregar-tarjeta.component';
import { EliminarTarjetaComponent } from './eliminar-tarjeta/eliminar-tarjeta.component';
import { TarjetasRegistradasComponent } from './tarjetas-registradas/tarjetas-registradas.component';
import { ClienteAgregarProductoComponent } from './cliente-agregar-producto/cliente-agregar-producto.component';
import { ClienteActualizarProductoComponent } from './cliente-actualizar-producto/cliente-actualizar-producto.component';
import { ClienteEliminarProductoComponent } from './cliente-eliminar-producto/cliente-eliminar-producto.component';
import { ComprarAClientesComponent } from './comprar-a-clientes/comprar-a-clientes.component';
import { ComprarAProveedoresComponent } from './comprar-a-proveedores/comprar-a-proveedores.component';
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
  { path: 'agregar-tarjeta', component: AgregarTarjetaComponent},
  { path: 'eliminar-tarjeta', component: EliminarTarjetaComponent},
  { path: 'tarjetas-registradas', component: TarjetasRegistradasComponent},
  { path: 'cl-agregar-producto', component: ClienteAgregarProductoComponent},
  { path: 'cl-actualizar-producto', component: ClienteActualizarProductoComponent},
  { path: 'cl-eliminar-producto', component: ClienteEliminarProductoComponent},
  { path: 'comprar-a-clientes', component: ComprarAClientesComponent},
  { path: 'comprar-a-proveedores', component: ComprarAProveedoresComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
