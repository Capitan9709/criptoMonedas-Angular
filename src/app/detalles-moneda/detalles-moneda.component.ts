import { Component } from '@angular/core';
import { AccesoApiService } from '../acceso-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalles-moneda',
  templateUrl: './detalles-moneda.component.html',
  styleUrls: ['./detalles-moneda.component.css']
})
export class DetallesMonedaComponent {
  datoMoneda: any;
  id: any;

  constructor(public datosAPI: AccesoApiService, private router: ActivatedRoute) { 
    this.id = this.router.snapshot.paramMap.get('id');
    this.datosAPI.obtenerMoneda(this.id).subscribe(
      (data: any) => {
        this.datoMoneda = data;
      })
  }
}
