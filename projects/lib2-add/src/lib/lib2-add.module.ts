import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Lib2AddComponent } from './lib2-add.component';



@NgModule({
  declarations: [Lib2AddComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule
  ],
  exports: [Lib2AddComponent]
})
export class Lib2AddModule { }
