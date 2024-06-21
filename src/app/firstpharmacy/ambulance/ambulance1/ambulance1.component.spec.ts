import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ambulance1Component } from './ambulance1.component';

describe('Ambulance1Component', () => {
  let component: Ambulance1Component;
  let fixture: ComponentFixture<Ambulance1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ambulance1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ambulance1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
