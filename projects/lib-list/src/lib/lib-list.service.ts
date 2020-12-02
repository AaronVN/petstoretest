// tslint:disable
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LibListService {

  constructor(private http: HttpClient) {
   }
  private pets: any = [];

    getList(statusType: string) { // type será el status (establecido a través de HTML: available, pending y sold

     // vaciar array this.pets
    this.pets.splice(0);
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
    console.log('Servicio Libreria: Enviando Array pets: ');
    console.log(this.pets);
    return this.pets;
  }

  private InfoByStatus !: string;

  getPetsByStatus(status: string) {
  this.InfoByStatus = 'https://petstore.swagger.io/v2/pet/findByStatus?status=' + status;
  return this.http.get(this.InfoByStatus);
  }
}
