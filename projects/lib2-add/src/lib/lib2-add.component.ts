// tslint:disable
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-lib2-add',
  templateUrl: './lib2.add.component.html',
  styleUrls: ['./lib2.add.component.css']
})
export class Lib2AddComponent implements OnInit {

  constructor() { }
  recievedPet: any;
  ePet: any = {id: -1, name: 'SamplePet', status: 'pending'}; // >>>> model Pet
  emptyPet: any = {id: -1, name: '', status: 'pending'};
  editing = false;
  thereIsanError = false;
  AddingSuscess = false;
  message = 'Ha habido un error: Todavía no se ha establecido texto!'

  ngOnInit(): void {
  }
  AddPet() {
    this.AddingSuscess = true;
    this.message = 'Botón funciona y se enviaría la mascota a la API';
  }

}
