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

  page=1;
  pageSize=10;

  listaSeleccionadas= new Array();

  // datosDeBD: Observable<any[]>;

  constructor(private http: HttpClient, public firestore: Firestore, public datosAPI: AccesoApiService) { 
    // const datos = collection(firestore, 'items');
    // this.datosDeBD = collectionData(datos);
  }

  
  monedaSeleccionada(moneda:any){
    this.listaSeleccionadas.push(moneda);
    localStorage.setItem("moneda", JSON.stringify(this.listaSeleccionadas));
  }

  ngOnInit(){
    if(localStorage.getItem("moneda") != null)
      this.listaSeleccionadas = JSON.parse(localStorage.getItem("moneda")!);
    else
      this.listaSeleccionadas = new Array();
  }

  borrarMoneda(moneda:any){
    this.listaSeleccionadas.splice(this.listaSeleccionadas.indexOf(moneda), 1);
    localStorage.setItem("moneda", JSON.stringify(this.listaSeleccionadas));
  }


  // lanzaPeticionAJAX() {
  //   this.http.get("https://api.coingecko.com/api/v3/coins/bitcoin").subscribe(
  //     (data:any) => {
  //       console.log(data);
  //       // this.nombreMoneda = data.name;
  //       // this.categoria = data.categories[0];
  //       // this.imagenMoneda = data.image.small;
  //       // this.descripcion = data.description.en;
  //     })
  // }

  // escribirEnDB(){
  //   addDoc(collection(this.firestore, "items"), {
  //     usuario: "Luis",
  //     moneda: "eth"
  //   });
  // }

}
