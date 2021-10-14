import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParametersRoutingModule } from './parameters-routing.module';
import { ParametersComponent } from './parameters.component';
import { ParametersEditComponent } from '../parameters-edit/parameters-edit.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ParametersComponent,
    ParametersEditComponent
  ],
  imports: [
    CommonModule,
    ParametersRoutingModule,
    ReactiveFormsModule
  ]
})
export class ParametersModule { }
