import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BedsideattendentComponent } from './bedsideattendent.component';

describe('BedsideattendentComponent', () => {
  let component: BedsideattendentComponent;
  let fixture: ComponentFixture<BedsideattendentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BedsideattendentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BedsideattendentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
