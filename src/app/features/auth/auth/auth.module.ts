import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../pages/login/login';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthRoutingModule } from './auth-routing.module';


@NgModule({
  declarations: [],
  imports: [
    LoginComponent,
    CommonModule,
    RouterModule,
    AuthRoutingModule,
    FormsModule
  ]
})
export class AuthModule { }
