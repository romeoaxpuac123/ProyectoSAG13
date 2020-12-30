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
import { NavBarAdminComponent } from './nav-bar-admin/nav-bar-admin.component';
import { VentasClienteComponent } from './ventas-cliente/ventas-cliente.component';
import { VentasProveedorComponent } from './ventas-proveedor/ventas-proveedor.component';
import { EstadoPedidoComponent } from './estado-pedido/estado-pedido.component';
import { ProductosCategoriaComponent } from './productos-categoria/productos-categoria.component';
import { ULoginClienteComponent } from './u-login-cliente/u-login-cliente.component';
import { URegistroClienteComponent } from './u-registro-cliente/u-registro-cliente.component';
import { ULoginProveedorComponent } from './u-login-proveedor/u-login-proveedor.component';
import { URegistroProveedorComponent } from './u-registro-proveedor/u-registro-proveedor.component';
import { UCrearProductoClienteComponent } from './u-crear-producto-cliente/u-crear-producto-cliente.component';
import { UCrearProductoProveedorComponent } from './u-crear-producto-proveedor/u-crear-producto-proveedor.component';
import { UVerProductosComponent } from './u-ver-productos/u-ver-productos.component';
import { UNavBarProveedorComponent } from './u-nav-bar-proveedor/u-nav-bar-proveedor.component';
import { UNavBarClienteComponent } from './u-nav-bar-cliente/u-nav-bar-cliente.component';



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
    ProductosClienteComponent,
    AgregarTarjetaComponent,
    EliminarTarjetaComponent,
    TarjetasRegistradasComponent,
    ClienteAgregarProductoComponent,
    ClienteActualizarProductoComponent,
    ClienteEliminarProductoComponent,
    ComprarAClientesComponent,
    ComprarAProveedoresComponent,
    ClienteFavoritosComponent,
    CarritoComponent,
    DatosFacturaComponent,
    PagarFacturaComponent,
    MisFacturasComponent,
    MisComprasComponent,
    ProductosSubastaClienteComponent,
    ProductosSubastaProveedorComponent,
    OfertasClienteComponent,
    PantallaAdminComponent,
    LoginadminComponent,
    NavBarAdminComponent,
    VentasClienteComponent,
    VentasProveedorComponent,
    EstadoPedidoComponent,
    ProductosCategoriaComponent,
    ULoginClienteComponent,
    URegistroClienteComponent,
    ULoginProveedorComponent,
    URegistroProveedorComponent,
    UCrearProductoClienteComponent,
    UCrearProductoProveedorComponent,
    UVerProductosComponent,
    UNavBarProveedorComponent,
    UNavBarClienteComponent
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
