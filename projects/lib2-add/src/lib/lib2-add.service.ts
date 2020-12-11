// tslint:disable
import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pet } from './models/pet';

@Injectable({
  providedIn: 'root'
})
export class Lib2AddService {

  constructor(private http: HttpClient) { }

  private subs: any;
  private link !: string;
  private date = new Date();
  private pet: Pet = {
    id: 1,
    name: 'SampleServicePet',
    status: 'pending',
    photoUrls: ['none'],
    category: {
      id: 0,
      name: ''
    },
    tags: [
      {
        id: 0,
        name: ''
      }
    ],

  }; // >>>> model Pet

  async addNewPet(id: number, name: string, status: string, photoUrls: string): Promise<Pet>{ //añadir modelo
  this.pet.id += this.date.getHours() + this.date.getMinutes() +this.date.getSeconds() + this.date.getDay() + this.date.getMonth() + this.date.getFullYear();
  this.pet.name = name; this.pet.status = status;
  this.link = 'https://petstore.swagger.io/v2/pet';

  this.subs = this.http.post<Pet>(this.link, this.pet).subscribe(
    {
    error: err => console.error(err)}

  );
  return this.pet;
  }
  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
