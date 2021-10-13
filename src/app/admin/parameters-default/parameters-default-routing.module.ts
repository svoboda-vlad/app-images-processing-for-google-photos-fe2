import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParametersDefaultComponent } from './parameters-default.component';

const routes: Routes = [{
  path: 'parameters-default',
  component: ParametersDefaultComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametersDefaultRoutingModule { }
