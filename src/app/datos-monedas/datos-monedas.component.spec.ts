import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosMonedasComponent } from './datos-monedas.component';

describe('DatosMonedasComponent', () => {
  let component: DatosMonedasComponent;
  let fixture: ComponentFixture<DatosMonedasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosMonedasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatosMonedasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
