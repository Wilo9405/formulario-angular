import { Routes } from '@angular/router';
import { ListComponent } from './pages/list/list.component';
import { FormCiudadesComponent } from './components/form-ciudades/form-ciudades.component';

export const routes: Routes = [
   {path: '',component: ListComponent},
   {path: 'components',component: FormCiudadesComponent}
   
];
