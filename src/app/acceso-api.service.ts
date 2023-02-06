import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AccesoApiService {

  public listaMonedas= new Array<any>();

  constructor(private http: HttpClient) { 
    this.obtenerListaMonedas();
  }
  obtenerListaMonedas() {
    this.http.get("https://api.coingecko.com/api/v3/coins/").subscribe(
      (data:any) => {
        console.log(data);
        this.listaMonedas = data;
      })
  }
}
