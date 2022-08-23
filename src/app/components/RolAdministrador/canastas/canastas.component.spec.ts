import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanastasComponent } from './canastas.component';

describe('CanastasComponent', () => {
  let component: CanastasComponent;
  let fixture: ComponentFixture<CanastasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanastasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CanastasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
