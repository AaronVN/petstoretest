// tslint:disable
import { Component, OnInit } from '@angular/core';
import { Lib2AddService } from './lib2-add.service';

@Component({
  selector: 'lib-lib2-add',
  templateUrl: './lib2.add.component.html',
  styleUrls: ['./lib2.add.component.css']
})
export class Lib2AddComponent implements OnInit {

  constructor(private serv: Lib2AddService) { }
  recievedPet: any;
  ePet: any = {id: -1, name: 'SamplePet', status: 'pending'}; // >>>> model Pet
  emptyPet: any = {id: -1, name: '', status: 'pending'};
  editing = false;
  thereIsanError = false;
  AddingSuscess = false;
  message = 'Ha habido un error: No ha ocurrido ningún evento si estás viendo esto!'
  a !: boolean;
  ngOnInit(): void {
  }
  AddPet(): void {
    this.AddingSuscess = true;

    try {
      this.serv.addNewPet(1, this.ePet.name, this.ePet.status, 'unassigned'); // ejecuta el método y devuelve un mensaje en la misma línea
      this.message = 'Se ha enviado la mascota con éxito';
      this.thereIsanError = false;
      }
    catch(error) {console.log(error);
      this.message = 'Ha habido un error inesperado'; this.thereIsanError = true;}
    }
}
