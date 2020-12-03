// tslint:disable
import { Component, OnInit } from '@angular/core';
import {Pet} from '../../models/pet';

@Component({
  selector: 'app-petadd',
  templateUrl: './petadd.component.html',
  styleUrls: ['./petadd.component.css']
})
export class PetaddComponent implements OnInit {

  constructor() { }
  recievedPet: any;
  ePet: Pet = {id: -1, name: 'SamplePet', status: 'pending'};
  emptyPet: Pet = {id: -1, name: '', status: 'pending'};
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
