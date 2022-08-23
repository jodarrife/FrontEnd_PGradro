import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanastaDetalleComponent } from './canasta-detalle.component';

describe('CanastaDetalleComponent', () => {
  let component: CanastaDetalleComponent;
  let fixture: ComponentFixture<CanastaDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanastaDetalleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CanastaDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
