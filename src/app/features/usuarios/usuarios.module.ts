import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuariosMenu } from './pages/menu/menu';
import { UsuariosLista } from './pages/lista/lista';
import { Roles } from './pages/roles/roles';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    UsuariosMenu,
    UsuariosLista,
    Roles,
    UsuariosRoutingModule
  ]
})
export class UsuariosModule {}
