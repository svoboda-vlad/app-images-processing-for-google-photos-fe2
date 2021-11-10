import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImagesProcessingRoutingModule } from './images-processing-routing.module';
import { ImagesProcessingComponent } from './images-processing.component';


@NgModule({
  declarations: [
    ImagesProcessingComponent
  ],
  imports: [
    CommonModule,
    ImagesProcessingRoutingModule
  ]
})
export class ImagesProcessingModule { }
