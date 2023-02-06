import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesMonedaComponent } from './detalles-moneda.component';

describe('DetallesMonedaComponent', () => {
  let component: DetallesMonedaComponent;
  let fixture: ComponentFixture<DetallesMonedaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesMonedaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallesMonedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
