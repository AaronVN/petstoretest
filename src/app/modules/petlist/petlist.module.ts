import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PetlistRoutingModule } from './petlist-routing.module';
import { PetlistComponent } from './petlist.component';


@NgModule({
  declarations: [PetlistComponent],
  imports: [
    CommonModule,
    PetlistRoutingModule
  ]
})
export class PetlistModule { }
