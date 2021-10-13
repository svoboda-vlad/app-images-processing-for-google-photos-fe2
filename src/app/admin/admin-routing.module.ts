import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParametersDefaultModule } from './parameters-default/parameters-default.module';
import { UsersModule } from './users/users.module';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes), UsersModule, ParametersDefaultModule],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
