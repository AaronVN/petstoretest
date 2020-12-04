import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { PetaddRoutingModule } from './petadd-routing.module';
import { PetaddComponent } from './petadd.component';

import { Lib2AddModule } from 'lib2-add';

@NgModule({
  declarations: [PetaddComponent],
  imports: [
    CommonModule,
    PetaddRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    Lib2AddModule
  ]
})
export class PetaddModule { }
