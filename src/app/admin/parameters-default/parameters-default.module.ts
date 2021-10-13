import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParametersDefaultRoutingModule } from './parameters-default-routing.module';
import { ParametersDefaultComponent } from './parameters-default.component';


@NgModule({
  declarations: [
    ParametersDefaultComponent
  ],
  imports: [
    CommonModule,
    ParametersDefaultRoutingModule
  ]
})
export class ParametersDefaultModule { }
