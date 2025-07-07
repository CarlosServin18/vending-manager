import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Ventas } from './pages/ventas/ventas'; // Ensure the correct path to VentasComponent
import { Usuarios } from './pages/usuarios/usuarios';
import { ProductosXEmpleado } from './pages/productos-x-empleado/productos-x-empleado';

const routes: Routes = [
  {path: 'ventas', component: Ventas},
  {path: 'usuarios', component: Usuarios},
  {path: 'productos', component: ProductosXEmpleado}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
