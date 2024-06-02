
import { Component, EventEmitter, Input, Output, input } from '@angular/core';

@Component({
  selector: 'app-item-ciudades',
  standalone: true,
  imports: [],
  templateUrl: './item-ciudades.component.html',
  styleUrl: './item-ciudades.component.scss'
})
export class ItemCiudadesComponent {
  @Input() cityInput: any

  @Output() remove:EventEmitter<any> = new EventEmitter();


eliminar() {
  this.remove.emit(this.cityInput);
}
  
}
