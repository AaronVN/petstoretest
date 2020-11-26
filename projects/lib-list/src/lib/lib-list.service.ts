import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LibListService {

  constructor(private http: HttpClient) { }
  
  private AllInfo:string;
  private DetailedInfo:string;
 
  
  getAllInfo() { 
  this.AllInfo = 'https://petstore.swagger.io/';
  return this.http.get(this.AllInfo)};
  
  private PetInfo:string;
  getPetInfo(petId) {
	this.petInfo = 'https://petstore.swagger.io/pet/'+petId;
	return this.http.get(this.petInfo);
  }
  private InfoByStatus:string;
  getPetsByStatus(status) {
	this.InfoByStatus = 'https://petstore.swagger.io/pet/'+status;
	return this.http.get(this.petInfo);
  }
}
