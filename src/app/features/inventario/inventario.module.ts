import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { InventarioRoutingModule } from './inventario-routing.module';
import { Inventario } from './pages/inventario/inventario';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    Inventario,
    InventarioRoutingModule
  ]
})
export class InventarioModule {}
