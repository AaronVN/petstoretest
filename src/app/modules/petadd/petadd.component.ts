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
  pet: any;
  editing = false;

  ngOnInit(): void {
  }

}
