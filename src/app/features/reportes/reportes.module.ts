import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportesRoutingModule } from './reportes-routing.module';
import { Ventas } from './usuarios/pages/ventas/ventas';
import { RouterModule } from '@angular/router';
import { ReportesMenu } from './pages/menu/menu';
import { Inventario } from '../inventario/pages/inventario/inventario';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReportesRoutingModule,
    Ventas,
    RouterModule,
    ReportesMenu,
    Inventario,
    FormsModule
  ]
})
export class ReportesModule { }
