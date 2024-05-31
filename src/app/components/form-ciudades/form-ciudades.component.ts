
import { Component, EventEmitter, Output, output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-ciudades',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-ciudades.component.html',
  styleUrl: './form-ciudades.component.scss'
})
export class FormCiudadesComponent {
  miForm = this.fb.group({
   Ciudad: ["",[Validators.required]],
   Pais: ["",[Validators.required]],
   Fecha: ["",[Validators.required]],
  
  })

  @Output() city = new EventEmitter<any>();

  constructor(private fb: FormBuilder) {
   
  } 
  sendForm(event: Event){
    event.preventDefault();
    console.log("funciona!!", this.miForm.value)
 
    
    //validaciones
    this.city.emit(this.miForm.value)

    
  }

}
