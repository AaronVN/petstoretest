import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibListComponent } from './lib-list.component';

@NgModule({
  declarations: [LibListComponent],
  imports: [ CommonModule
  ],
  exports: [LibListComponent]
})
export class LibListModule { }
