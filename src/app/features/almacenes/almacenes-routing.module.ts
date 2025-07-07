import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlmacenesMenu } from './pages/menu/menu';
import { Almacenes } from './pages/almacenes/almacenes';

const routes: Routes = [
  { path: '', component: AlmacenesMenu },
  { path: 'almacenes', component: Almacenes },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlmacenesRoutingModule {}
