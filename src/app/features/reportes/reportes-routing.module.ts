import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosModule } from './usuarios/usuarios.module';
import { ReportesMenu } from './pages/menu/menu';

const routes: Routes = [
  { path: '', component: ReportesMenu },
  {path: 'usuarios', loadChildren: () => import('./usuarios/usuarios.module').then(m => m.UsuariosModule)},
  { path: 'vending', loadChildren: () => import('./vending/vending.module').then(m => m.VendingModule) },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportesRoutingModule { }
