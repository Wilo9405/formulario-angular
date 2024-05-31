import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCiudadesComponent } from './form-ciudades.component';

describe('FormCiudadesComponent', () => {
  let component: FormCiudadesComponent;
  let fixture: ComponentFixture<FormCiudadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormCiudadesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormCiudadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
