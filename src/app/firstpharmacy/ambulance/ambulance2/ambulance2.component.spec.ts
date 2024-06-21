import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ambulance2Component } from './ambulance2.component';

describe('Ambulance2Component', () => {
  let component: Ambulance2Component;
  let fixture: ComponentFixture<Ambulance2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ambulance2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ambulance2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
