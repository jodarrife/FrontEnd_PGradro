import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspacioFisicosComponent } from './espacio-fisicos.component';

describe('EspacioFisicosComponent', () => {
  let component: EspacioFisicosComponent;
  let fixture: ComponentFixture<EspacioFisicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspacioFisicosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EspacioFisicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
