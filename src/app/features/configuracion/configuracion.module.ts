import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ConfiguracionRoutingModule } from './configuracion-routing.module';
import { Configuracion } from './pages/configuracion/configuracion';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    Configuracion,
    ConfiguracionRoutingModule
  ]
})
export class ConfiguracionModule {}
