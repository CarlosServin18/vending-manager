import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { Ventas } from './pages/ventas/ventas';
import { Usuarios } from './pages/usuarios/usuarios';
import { ProductosXEmpleado } from './pages/productos-x-empleado/productos-x-empleado';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    Ventas,
    Usuarios,
    ProductosXEmpleado,
    FormsModule
  ]
})
export class UsuariosModule { }
