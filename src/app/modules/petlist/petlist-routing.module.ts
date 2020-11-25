import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PetlistComponent } from './petlist.component';

const routes: Routes = [{ path: '', component: PetlistComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PetlistRoutingModule { }
