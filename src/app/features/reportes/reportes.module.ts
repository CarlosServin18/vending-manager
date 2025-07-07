import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportesRoutingModule } from './reportes-routing.module';
import { Ventas } from './usuarios/pages/ventas/ventas';
import { RouterModule } from '@angular/router';
import { ReportesMenu } from './pages/menu/menu';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReportesRoutingModule,
    Ventas,
    RouterModule,
    ReportesMenu
  ]
})
export class ReportesModule { }
