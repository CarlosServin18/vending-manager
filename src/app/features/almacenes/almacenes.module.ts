import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AlmacenesRoutingModule } from './almacenes-routing.module';
import { AlmacenesMenu } from './pages/menu/menu';
import { Almacenes } from './pages/almacenes/almacenes';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    AlmacenesMenu,
    Almacenes,
    AlmacenesRoutingModule
  ]
})
export class AlmacenesModule {}
