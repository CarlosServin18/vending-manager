import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdministracionRoutingModule } from './administracion-routing.module';
import { FormsModule } from '@angular/forms';
import { AdministracionMenu } from './pages/menu/menu';

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
