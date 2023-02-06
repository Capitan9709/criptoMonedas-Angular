import { Component } from '@angular/core';
import { AccesoApiService } from '../acceso-api.service';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent {

  constructor(public datosAPI: AccesoApiService) { 

  }
}
