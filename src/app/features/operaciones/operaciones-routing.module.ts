import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OperacionesMenu } from './pages/menu/menu';
import { VendingMenu } from './pages/vending-menu/vending-menu';
import { Planograma } from './pages/planograma/planograma';
import { Resurtido } from './pages/resurtido/resurtido';
import { Permisos } from './pages/permisos/permisos';

const routes: Routes = [
  { path: '', component: OperacionesMenu },
  {
    path: 'vending',
    children: [
      { path: '', component: VendingMenu },
      { path: 'planograma', component: Planograma },
      { path: 'resurtido', component: Resurtido },
      { path: 'permisos', component: Permisos },
    ],
  },
  {
    path: 'usuarios',
    loadChildren: () =>
      import('../usuarios/usuarios.module').then(m => m.UsuariosModule),
  },
  {
    path: 'empleados',
    loadChildren: () =>
      import('../empleados/empleados.module').then(m => m.EmpleadosModule),
  },
  {
    path: 'almacenes',
    loadChildren: () =>
      import('../almacenes/almacenes.module').then(m => m.AlmacenesModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OperacionesRoutingModule {}
