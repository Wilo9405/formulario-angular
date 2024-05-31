import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListComponent } from './pages/list/list.component';
import { FormCiudadesComponent } from './components/form-ciudades/form-ciudades.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ListComponent,FormCiudadesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'unidad7';

}
