import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportesRoutingModule } from './reportes-routing.module';
import { Ventas } from './usuarios/pages/ventas/ventas';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReportesRoutingModule,
    Ventas,
    RouterModule
  ]
})
export class ReportesModule { }
