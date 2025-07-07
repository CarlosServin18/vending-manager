import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosMenu } from './pages/menu/menu';
import { UsuariosLista } from './pages/lista/lista';
import { Roles } from './pages/roles/roles';

const routes: Routes = [
  { path: '', component: UsuariosMenu },
  { path: 'lista', component: UsuariosLista },
  { path: 'roles', component: Roles },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule {}
