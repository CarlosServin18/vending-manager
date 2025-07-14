import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EmpleadosRoutingModule } from './empleados-routing.module';
import { Menu } from './pages/menu/menu';
import { Empleados } from './pages/empleados/empleados';
import { Areas } from './pages/areas/areas';
import { Departamentos } from './pages/departamentos/departamentos';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    Menu,
    Empleados,
    Areas,
    Departamentos,
    EmpleadosRoutingModule
  ]
})
export class EmpleadosModule {}
