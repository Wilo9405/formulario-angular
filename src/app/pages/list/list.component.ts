import { Component } from '@angular/core';
import { FormCiudadesComponent } from '../../components/form-ciudades/form-ciudades.component';
import { NgFor } from '@angular/common';
import { ItemCiudadesComponent } from '../../item-ciudades/item-ciudades.component';


@Component({
  selector: 'app-list',
  standalone: true,
  imports: [FormCiudadesComponent,NgFor, ItemCiudadesComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {

  ciudades: any[] = []

  addCity(city: any){
    this.ciudades.push(city)
  }




}
