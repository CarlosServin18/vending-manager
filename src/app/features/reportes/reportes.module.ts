import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ReportesRoutingModule } from './reportes-routing.module';
import { Ventas } from './usuarios/pages/ventas/ventas';
import { RouterModule } from '@angular/router';
import { ReportesMenu } from './pages/menu/menu';
import { Inventario } from '../inventario/pages/inventario/inventario';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReportesRoutingModule,
    FormsModule,
    Ventas,
    RouterModule,
    ReportesMenu,
    Inventario
  ]
})
export class ReportesModule { }
