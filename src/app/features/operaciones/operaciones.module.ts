import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OperacionesRoutingModule } from './operaciones-routing.module';
import { OperacionesMenu } from './pages/menu/menu';
import { VendingMenu } from './pages/vending-menu/vending-menu';
import { Planograma } from './pages/planograma/planograma';
import { Resurtido } from './pages/resurtido/resurtido';
import { Permisos } from './pages/permisos/permisos';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    OperacionesMenu,
    VendingMenu,
    Planograma,
    Resurtido,
    Permisos,
    OperacionesRoutingModule
  ]
})
export class OperacionesModule {}
