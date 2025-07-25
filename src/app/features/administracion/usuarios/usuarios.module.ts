import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UsuariosRoutingModule } from './usuarios-routing.module';
import { Menu } from './pages/menu/menu';
import { Lista } from './pages/lista/lista';
import { Roles } from './pages/roles/roles';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    Menu,
    Lista,
    Roles,
    UsuariosRoutingModule
  ]
})
export class UsuariosModule {}
