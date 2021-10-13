import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParametersDefaultRoutingModule } from './parameters-default-routing.module';
import { ParametersDefaultComponent } from './parameters-default.component';
import { ParametersDefaultEditComponent } from '../parameters-default-edit/parameters-default-edit.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ParametersDefaultComponent,
    ParametersDefaultEditComponent
  ],
  imports: [
    CommonModule,
    ParametersDefaultRoutingModule,
    ReactiveFormsModule
  ]
})
export class ParametersDefaultModule { }
