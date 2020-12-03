// tslint:disable
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Lib2AddService {

  constructor(private http: HttpClient) { }

  private link !: string;

  addNewPet(pet: any) { //añadir modelo
  this.link = 'https://petstore.swagger.io/v2/pet';
  //this.link.post();
  return 'Se ha enviado con éxito';
  }
}
