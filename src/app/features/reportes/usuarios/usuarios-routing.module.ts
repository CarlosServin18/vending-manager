import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Ventas } from './pages/ventas/ventas'; // Ensure the correct path to VentasComponent

const routes: Routes = [
  {path: 'ventas', component: Ventas},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
