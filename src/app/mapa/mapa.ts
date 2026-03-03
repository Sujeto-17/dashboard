import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet.heat';
import { MapaService } from '../services/mapa-service';

@Component({
  selector: 'app-mapa',
  imports: [],
  templateUrl: './mapa.html',
  styleUrl: './mapa.css',
})
export class Mapa implements OnInit {

  constructor(private mapaService: MapaService) { }

  private map!: L.Map; // Variable para guardar el mapa
  private heatLayer: any; // Variable para el heatMap

  ngOnInit(): void {
    // Crear el mapa centrado en Tabasco
    this.map = L.map('map').setView([17.8, -92.9], 8);

    // Agregar mapa base
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap'
    }).addTo(this.map);

    // Cargar municipios automáticamente
    this.cargarMunicipios();
  }

  // Cargar municipios de Tabasco
  cargarMunicipios() {
    this.mapaService.obtenerMunicipios().subscribe((municipios: any[]) => {
      municipios.forEach(municipio => {

        // Crear marcador para cada municipio
        const marker = L.marker([municipio.lat, municipio.lng])
          .addTo(this.map)
          .bindPopup(municipio.label);

        // Cuando haga click en un municipio
        marker.on('click', () => {
          const nombreFormateado = this.formatearNombre(municipio.label);
          this.cargarHeatmap(nombreFormateado);
        })
      })
    })
  }

  cargarHeatmap(nombreMunicipio: string) {
    // Si ya existe un heatmap, eliminarlo
    if (this.heatLayer) {
      this.map.removeLayer(this.heatLayer);
    }

    this.mapaService.obtenerLocalidades(nombreMunicipio).subscribe((localidades: any[]) => {
      // Convertir a formato heatmap
      const puntos = localidades.map(loc => [
        loc.lat,
        loc.lng,
        0.5 // Intensidad
      ]);

      // Crear heatmap
      this.heatLayer = (L as any).heatLayer(puntos, {
        radius: 25,
        blur: 15,
        maxZoom: 10
      }).addTo(this.map);
    })
  }

  formatearNombre(nombre: string): string {

    return nombre
      .toLowerCase()                // todo en minúsculas
      .normalize("NFD")             // quitar acentos
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/\s+/g, "-");        // espacios a guiones
  }

}
