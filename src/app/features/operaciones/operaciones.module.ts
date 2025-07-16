import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OperacionesRoutingModule } from './operaciones-routing.module';
import { OperacionesMenu } from './pages/menu/menu';
import { Planograma } from './pages/planograma/planograma';
import { Resurtido } from './pages/resurtido/resurtido';
import { Permisos } from './pages/permisos/permisos';
import { FormsModule } from '@angular/forms';
import {DragDropModule} from '@angular/cdk/drag-drop';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    OperacionesMenu,
    Planograma,
    Resurtido,
    Permisos,
    OperacionesRoutingModule,
    FormsModule,
    DragDropModule
  ]
})
export class OperacionesModule {}
