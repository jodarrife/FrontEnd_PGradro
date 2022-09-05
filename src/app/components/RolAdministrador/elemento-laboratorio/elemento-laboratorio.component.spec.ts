import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementoLaboratorioComponent } from './elemento-laboratorio.component';

describe('ElementoLaboratorioComponent', () => {
  let component: ElementoLaboratorioComponent;
  let fixture: ComponentFixture<ElementoLaboratorioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementoLaboratorioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementoLaboratorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
