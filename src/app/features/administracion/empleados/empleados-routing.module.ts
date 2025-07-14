import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Menu } from './pages/menu/menu';
import { Empleados } from './pages/empleados/empleados';
import { Areas } from './pages/areas/areas';
import { Departamentos } from './pages/departamentos/departamentos';

const routes: Routes = [
  { path: '', component: Menu },
  { path: 'empleados', component: Empleados },
  { path: 'areas', component: Areas },
  { path: 'departamentos', component: Departamentos },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpleadosRoutingModule {}
