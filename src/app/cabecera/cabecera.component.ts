import { Component, Input } from '@angular/core';
import { AccesoApiService } from '../acceso-api.service';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent {
  
  page=1;
  pageSize=10;

  listaSeleccionadas= new Array();

  @Input() moneda: any;


  crearLista(moneda: any){
    for (let i = 0; i < this.listaSeleccionadas.length; i++) {
      if (moneda == this.listaSeleccionadas[i]){
        this.listaSeleccionadas.splice(i, 1);
        // return;
      }
      else{
        i++;
      }
    }
    this.listaSeleccionadas.push(moneda);
    console.log(this.listaSeleccionadas);
  }
    

  constructor(public datosAPI: AccesoApiService) { 

  }

  
}
