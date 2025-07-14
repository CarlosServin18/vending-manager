import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Menu } from './pages/menu/menu';
import { Lista } from './pages/lista/lista';
import { Roles } from './pages/roles/roles';

const routes: Routes = [
  { path: '', component: Menu },
  { path: 'lista', component: Lista },
  { path: 'roles', component: Roles },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule {}
