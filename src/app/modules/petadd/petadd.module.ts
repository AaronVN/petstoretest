import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PetaddRoutingModule } from './petadd-routing.module';
import { PetaddComponent } from './petadd.component';


@NgModule({
  declarations: [PetaddComponent],
  imports: [
    CommonModule,
    PetaddRoutingModule
  ]
})
export class PetaddModule { }
