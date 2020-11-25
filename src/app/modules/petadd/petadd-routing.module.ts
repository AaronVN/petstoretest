import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PetaddComponent } from './petadd.component';

const routes: Routes = [{ path: '', component: PetaddComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PetaddRoutingModule { }
