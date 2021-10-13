import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParametersDefaultEditComponent } from '../parameters-default-edit/parameters-default-edit.component';
import { ParametersDefaultComponent } from './parameters-default.component';

const routes: Routes = [{
  path: 'parameters-default',
  component: ParametersDefaultComponent
},
{
  path: 'parameters-default/edit',
  component: ParametersDefaultEditComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametersDefaultRoutingModule { }
