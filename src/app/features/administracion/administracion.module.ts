import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdministracionRoutingModule } from './administracion-routing.module';
import { FormsModule } from '@angular/forms';
import { Menu } from './menu/menu';
import { Empleados } from './empleados/pages/empleados/empleados';
import { Departamentos } from './empleados/pages/departamentos/departamentos';
import { Areas } from './empleados/pages/areas/areas';
import { Almacenes } from './almacenes/pages/almacenes/almacenes';
import { Lista } from './usuarios/pages/lista/lista';
import { Roles } from './usuarios/pages/roles/roles';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    AdministracionRoutingModule,
    FormsModule,
    Menu,
    Empleados,
    Departamentos,
    Areas,
    Almacenes,
    Lista,
    Roles
  ]
})
export class AdministracionModule { }
