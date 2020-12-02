// tslint:disable
import { Component, OnInit } from '@angular/core';
import { LibListService } from 'lib-list';
import {Pet} from '../../models/pet';

@Component({
  selector: 'app-petlist',
  templateUrl: './petlist.component.html',
  styleUrls: ['./petlist.component.css']
})
export class PetlistComponent implements OnInit {

  showingAvailable !: boolean; // 0 = available, 1 = pending, 2 = sold
  showingPending !: boolean; // "!" para inicializar una variable no definida
  showingSold !: boolean;

  empty: null;

  constructor(private lib: LibListService) {
  }
  pets: any = [];
  ngOnInit(): void {
    this.showingAvailable = true;
    this.showingPending = false;
    this.showingSold = false;
    this.pets = this.lib.getList('available');
    console.log('Recibida array pets: ');
    console.log(this.pets);
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
