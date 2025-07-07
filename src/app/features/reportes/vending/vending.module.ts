import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendingRoutingModule } from './vending-routing.module';
import { Inventario } from './pages/inventario/inventario';


@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    VendingRoutingModule,
    Inventario
  ]
})
export class VendingModule { }
