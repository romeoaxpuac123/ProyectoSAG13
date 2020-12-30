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
import { ClienteFavoritosComponent } from './cliente-favoritos/cliente-favoritos.component';
import { CarritoComponent } from './carrito/carrito.component';
import { DatosFacturaComponent } from './datos-factura/datos-factura.component';
import { PagarFacturaComponent } from './pagar-factura/pagar-factura.component';
import { MisFacturasComponent } from './mis-facturas/mis-facturas.component';
import { MisComprasComponent } from './mis-compras/mis-compras.component';
import { ProductosSubastaClienteComponent } from './productos-subasta-cliente/productos-subasta-cliente.component';
import { ProductosSubastaProveedorComponent } from './productos-subasta-proveedor/productos-subasta-proveedor.component';
import { OfertasClienteComponent } from './ofertas-cliente/ofertas-cliente.component';
import { PantallaAdminComponent } from './pantalla-admin/pantalla-admin.component';
import { LoginadminComponent } from './loginadmin/loginadmin.component';
import { VentasClienteComponent } from './ventas-cliente/ventas-cliente.component';
import { VentasProveedorComponent } from './ventas-proveedor/ventas-proveedor.component';
import { EstadoPedidoComponent } from './estado-pedido/estado-pedido.component';
import { ProductosCategoriaComponent} from './productos-categoria/productos-categoria.component';
import { ULoginClienteComponent} from './u-login-cliente/u-login-cliente.component';
import { URegistroClienteComponent} from './u-registro-cliente/u-registro-cliente.component';
import { ULoginProveedorComponent} from './u-login-proveedor/u-login-proveedor.component';
import { URegistroProveedorComponent} from './u-registro-proveedor/u-registro-proveedor.component';
import { UCrearProductoClienteComponent} from './u-crear-producto-cliente/u-crear-producto-cliente.component';
import { UCrearProductoProveedorComponent} from './u-crear-producto-proveedor/u-crear-producto-proveedor.component';
import { UVerProductosComponent} from './u-ver-productos/u-ver-productos.component';
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
  { path: 'cliente-favoritos', component: ClienteFavoritosComponent},
  { path: 'carrito', component: CarritoComponent},
  { path: 'datos-factura', component: DatosFacturaComponent},
  { path: 'pagar-factura', component: PagarFacturaComponent},
  { path: 'mis-facturas', component: MisFacturasComponent},
  { path: 'mis-compras', component: MisComprasComponent},
  { path: 'productos-subasta-cliente', component: ProductosSubastaClienteComponent},
  { path: 'productos-subasta-proveedor', component: ProductosSubastaProveedorComponent},
  { path: 'ofertas-cliente', component: OfertasClienteComponent},
  { path: 'pantalla-admin', component: PantallaAdminComponent},
  { path: 'loginadmin', component: LoginadminComponent},
  { path: 'ventas-cliente', component: VentasClienteComponent},
  { path: 'ventas-proveedor', component: VentasProveedorComponent},
  { path: 'estado-pedido', component: EstadoPedidoComponent},
  { path: 'productos-categoria', component: ProductosCategoriaComponent},
  { path: 'u-login-cliente', component: ULoginClienteComponent},
  { path: 'u-registro-cliente', component: URegistroClienteComponent},
  { path: 'u-login-proveedor', component: ULoginProveedorComponent},
  { path: 'u-registro-proveedor', component: URegistroProveedorComponent},
  { path: 'u-crear-producto-cliente', component: UCrearProductoClienteComponent},
  { path: 'u-crear-producto-proveedor', component: UCrearProductoProveedorComponent},
  { path: 'u-ver-productos', component: UVerProductosComponent}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
