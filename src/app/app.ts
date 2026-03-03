import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Encabezado } from "./encabezado/encabezado";
import { EstadoServidor } from "./dashboard/estado-servidor/estado-servidor";
import { Trafico } from "./dashboard/trafico/trafico";
import { Registros } from "./dashboard/registros/registros";
import { DashboardElemento } from "./dashboard/dashboard-elemento/dashboard-elemento";
import { Mapa } from "./mapa/mapa";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Encabezado, EstadoServidor, Trafico, Registros, DashboardElemento, Mapa],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'dashboard';
  
}
