import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministracionMenu } from './pages/menu/menu';

const routes: Routes = [
  { path: '', component: AdministracionMenu },
  {
    path: 'usuarios',
    loadChildren: () => import('./usuarios/usuarios.module').then(m => m.UsuariosModule)
  },
  {
    path: 'empleados',
    loadChildren: () => import('./empleados/empleados.module').then(m => m.EmpleadosModule)
  },
  {
    path: 'almacenes',
    loadChildren: () => import('./almacenes/almacenes.module').then(m => m.AlmacenesModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
