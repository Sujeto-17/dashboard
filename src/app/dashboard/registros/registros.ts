import { Component } from '@angular/core';
import { NuevoRegistro } from "./nuevo-registro/nuevo-registro";

@Component({
  selector: 'app-registros',
  imports: [NuevoRegistro],
  templateUrl: './registros.html',
  styleUrl: './registros.css',
})
export class Registros {
}
