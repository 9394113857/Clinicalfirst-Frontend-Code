import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuroneComponent } from './nurone.component';

describe('NuroneComponent', () => {
  let component: NuroneComponent;
  let fixture: ComponentFixture<NuroneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuroneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuroneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
