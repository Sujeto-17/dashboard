import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MapaService {
  
  constructor(private http:HttpClient){}

  // Obtener municipios de Tabasco
  obtenerMunicipios():Observable<any>{
    return this.http.get('assets/tabasco/Municipios.json')
  }

  // Obtener localidades de un municipio
  obtenerLocalidades(nombreMunicipio: string): Observable<any>{
    return this.http.get(`assets/tabasco/${nombreMunicipio}.json`);
  }
}
