import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NutditComponent } from './nutdit.component';

describe('NutditComponent', () => {
  let component: NutditComponent;
  let fixture: ComponentFixture<NutditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NutditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NutditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
