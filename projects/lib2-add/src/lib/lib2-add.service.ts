// tslint:disable
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pet } from './models/pet';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class Lib2AddService {

  constructor(private http: HttpClient) { }

  private link !: string;
  private date = new Date();
  private pet: Pet = {id: 1, name: 'SampleServicePet', status: 'pending', photoUrls: 'none'}; // >>>> model Pet

  async addNewPet(id: number, name: string, status: string, photoUrls: string): Promise<Pet>{ //añadir modelo
  this.pet.id += this.date.getHours() + this.date.getMinutes() +this.date.getSeconds() + this.date.getDay() + this.date.getMonth() + this.date.getFullYear();
  this.pet.name = name; this.pet.status = status;
  console.log(this.pet);
  // this.ePet.photoUrls = photoUrls;
  this.link = 'https://petstore.swagger.io/v2/pet';
    this.http.post<Pet>(this.link, this.pet);
  return this.pet;
  }
}
