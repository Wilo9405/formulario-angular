import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-item-ciudades',
  standalone: true,
  imports: [],
  templateUrl: './item-ciudades.component.html',
  styleUrl: './item-ciudades.component.scss'
})
export class ItemCiudadesComponent {
  @Input() cityInput: any

}
