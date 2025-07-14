import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Home } from  './pages/home/home';
import { InicioRoutingModule } from './inicio-routing.module';
import { RouterModule } from '@angular/router';
import { DashboardComponent} from '../dashboard/pages/main/main';


@NgModule({
  declarations: [],
  imports: [
    Home,
    CommonModule,
    InicioRoutingModule,
    RouterModule,
    DashboardComponent
    
  
  ]
})
export class InicioModule { }
