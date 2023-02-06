import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AccesoApiService } from '../acceso-api.service';
import {Firestore, collectionData, collection, query, where, addDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.css']
})
export class CuerpoComponent {

  nombreMoneda="";
  categoria="";
  imagenMoneda="";
  descripcion="";

  datosDeBD: Observable<any[]>;

  constructor(private http: HttpClient, public firestore: Firestore) { 
    const datos = collection(firestore, 'items');
    this.datosDeBD = collectionData(datos);
    // console.log(datos);
    // this.datosDeBD = collectionData(query(datos, where("nombre", "==", "pepe")));
    // console.log(this.datosDeBD);
  }

  lanzaPeticionAJAX() {
    this.http.get("https://api.coingecko.com/api/v3/coins/bitcoin").subscribe(
      (data:any) => {
        console.log(data);
        this.nombreMoneda = data.name;
        this.categoria = data.categories[0];
        this.imagenMoneda = data.image.small;
        this.descripcion = data.description.en;
      })
  }

  escribirEnDB(){
    addDoc(collection(this.firestore, "items"), {
      usuario: "Luis",
      moneda: "eth"
    });
  }
}
