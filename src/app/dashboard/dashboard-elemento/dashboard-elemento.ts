import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-elemento',
  imports: [],
  templateUrl: './dashboard-elemento.html',
  styleUrl: './dashboard-elemento.css',
})
export class DashboardElemento {
  //@Input({required: true}) imagen!: {src: string, alt: string}
  //@Input({required: true}) titulo!: string;

  imagen = input.required<{src: string, alt: string}>();
  titulo = input.required<string>();

}
