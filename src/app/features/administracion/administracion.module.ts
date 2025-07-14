import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdministracionRoutingModule } from 'administracion.module';
import { AdministracionMenu } from './pages/menu/menu';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    AdministracionRoutingModule,
    AdministracionMenu,
    FormsModule
  ]
})
export class AdministracionModule { }
src\app\features\administracion\administracion-routing.module.ts