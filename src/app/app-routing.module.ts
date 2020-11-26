import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) },

	  { path: '', redirectTo: 'home', pathMatch: 'full' },

{ path: 'list', loadChildren: () => import('./modules/petlist/petlist.module').then(m => m.PetlistModule) },


{ path: 'adding', loadChildren: () => import('./modules/petadd/petadd.module').then(m => m.PetaddModule) },


{ path: 'error404', loadChildren: () => import('./modules/error404/error404.module').then(m => m.Error404Module) },

    {path: '**', redirectTo: '/error404', pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
