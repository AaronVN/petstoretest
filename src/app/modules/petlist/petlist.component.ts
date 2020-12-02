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
    /*this.pets = this.lib.getAllInfo(); // prueba para buscar el error, >> borrar
    console.log(this.pets);*/
    this.showingAvailable = true;
    this.showingPending = false;
    this.showingSold = false;
    this.pets = this.lib.getList('available');
    console.log(this.pets);
  }

  // Buttons
  // tslint:disable-next-line: typedef
  setListTypeD() {// Metodo para vaciar array
                  this.pets = this.lib.getList('available');
                }
  // tslint:disable-next-line: typedef
  setListTypeP() {
    this.pets = this.lib.getList('pending');
  }
  // tslint:disable-next-line: typedef
  setListTypeV() {
    this.pets = this.lib.getList('sold');
   }
}
