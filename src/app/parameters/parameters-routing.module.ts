import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParametersEditComponent } from '../parameters-edit/parameters-edit.component';
import { ParametersComponent } from './parameters.component';

const routes: Routes = [{
  path: '', component: ParametersComponent
},
{
  path: 'edit',
  component: ParametersEditComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametersRoutingModule { }
