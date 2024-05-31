import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCiudadesComponent } from './item-ciudades.component';

describe('ItemCiudadesComponent', () => {
  let component: ItemCiudadesComponent;
  let fixture: ComponentFixture<ItemCiudadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemCiudadesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ItemCiudadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
