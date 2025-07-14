import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdministracionRoutingModule } from './administracion-routing.module';
import { FormsModule } from '@angular/forms';
import { Menu } from './menu/menu';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    AdministracionRoutingModule,
    FormsModule,
    Menu
  ]
})
export class AdministracionModule { }
