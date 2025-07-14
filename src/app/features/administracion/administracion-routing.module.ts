import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'usuario_admin', loadChildren: () => import('./usuarios/usuarios.module').then(m => m.UsuariosModule)},
  {path: 'empleado_admin', loadChildren: () => import('./empleados/empleados.module').then(m => m.EmpleadosModule)},
  {path: 'almacenes_admin', loadChildren: () => import('./almacenes/almacenes.module').then(m => m.AlmacenesModule)},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
