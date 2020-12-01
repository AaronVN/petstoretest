import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { PetlistRoutingModule } from './petlist-routing.module';
import { PetlistComponent } from './petlist.component';
import { LibListModule } from 'lib-list';

@NgModule({
  declarations: [PetlistComponent,
  ],
  imports: [
    CommonModule,
    PetlistRoutingModule,

    LibListModule
  ]
})
export class PetlistModule { }
