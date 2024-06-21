import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BedsideOnetimeComponent } from './bedside-onetime.component';

describe('BedsideOnetimeComponent', () => {
  let component: BedsideOnetimeComponent;
  let fixture: ComponentFixture<BedsideOnetimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BedsideOnetimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BedsideOnetimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
