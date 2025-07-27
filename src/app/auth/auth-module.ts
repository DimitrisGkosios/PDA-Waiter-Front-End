import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing-module';
import { Login } from './login/login';
import { Register } from './register/register';
import { HttpClientModule } from '@angular/common/http';  // πρόσθεσε αυτό

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    Login,
    Register,
    HttpClientModule   // και εδώ
  ]
})
export class AuthModule {}
