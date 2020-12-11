// tslint:disable
import { Component } from '@angular/core';
import { LibListService } from './lib-list.service';

@Component({
  selector: 'lib-lib-list',
  templateUrl: './lib-list.component.html',
  styleUrls: ['./lib-list.component.css']
})
export class LibListComponent {
  showingAvailable !: boolean; // 0 = available, 1 = pending, 2 = sold
  showingPending !: boolean; // "!" para inicializar una variable no definida
  showingSold !: boolean;

  empty: null;

  constructor(private lib: LibListService) {}
  pets: any = [];
  ngOnInit(): void {
    this.showingAvailable = true;
    this.showingPending = false;
    this.showingSold = false;
    this.pets = this.lib.getList('available');
  }

  // Buttons
  setListTypeD() {// Metodo para vaciar array
                  this.pets = this.lib.getList('available');
                  this.showingAvailable = true; this.showingPending = false; this.showingSold = false;
                }
  setListTypeP() {
                  this.pets = this.lib.getList('pending');
                  this.showingAvailable = false; this.showingPending = true; this.showingSold = false;
  }
  setListTypeV() {
                  this.pets = this.lib.getList('sold');
                  this.showingAvailable = true; this.showingPending = false; this.showingSold = false;
   }






}
