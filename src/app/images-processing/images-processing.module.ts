import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImagesProcessingRoutingModule } from './images-processing-routing.module';
import { ImagesProcessingComponent } from './images-processing.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserInfoComponent } from '../user-info/user-info.component';


@NgModule({
  declarations: [
    ImagesProcessingComponent,
    UserInfoComponent
  ],
  imports: [
    CommonModule,
    ImagesProcessingRoutingModule,
    ReactiveFormsModule,
    NgbModule
  ]
})
export class ImagesProcessingModule { }
