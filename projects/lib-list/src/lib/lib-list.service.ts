import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LibListService {

  private AllInfo: string;
  private DetailedInfo: string;
  constructor(private http: HttpClient) {
    this.AllInfo = '';
    this.DetailedInfo = '';
   }




  private pets: any = [];

    // tslint:disable-next-line: typedef
    getList(statusType: string) { // type será el status (establecido a través de HTML: available, pending y sold
     // tslint:disable-next-line: typedef

     // vaciar array this.pets

    this.getPetsByStatus(statusType)
       .subscribe((data: any) => {
      for (const d of (data as any)) {
         this.pets.push(
        {id: d.id,
        name: d.name,
        status: d.status
        });
      }

    });
    return this.pets;
  }


  // tslint:disable-next-line: typedef
  getAllInfo() {
  this.AllInfo = 'https://petstore.swagger.io/';
  return this.http.get(this.AllInfo); }
  // tslint:disable-next-line: member-ordering
  private PetInfo !: string;
  // tslint:disable-next-line: typedef
  getPetInfo(petId: string) {
  this.PetInfo = 'https://petstore.swagger.io/pet/' + petId;
  return this.http.get(this.PetInfo);
  }
  // tslint:disable-next-line: member-ordering
  private InfoByStatus !: string;
  // tslint:disable-next-line: typedef
  getPetsByStatus(status: string) {
  this.InfoByStatus = 'https://petstore.swagger.io/v2/pet/findByStatus?status=' + status;
  return this.http.get(this.InfoByStatus);
  }
}
