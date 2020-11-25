import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) },


{ path: 'list', loadChildren: () => import('./modules/petlist/petlist.module').then(m => m.PetlistModule) },


{ path: 'adding', loadChildren: () => import('./modules/petadd/petadd.module').then(m => m.PetaddModule) }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
