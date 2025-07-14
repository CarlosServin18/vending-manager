import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AlmacenesRoutingModule } from './almacenes-routing.module';
import { Menu } from '../menu/menu';
import { Almacenes } from './pages/almacenes/almacenes';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    Menu,
    Almacenes,
    AlmacenesRoutingModule
  ]
})
export class AlmacenesModule {}
