import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-filtrado-casas',
  templateUrl: './filtrado-casas.component.html',
  styleUrls: ['./filtrado-casas.component.scss']
})
export class FiltradoCasasComponent {

  @Input() mensaje: string = '';

}
