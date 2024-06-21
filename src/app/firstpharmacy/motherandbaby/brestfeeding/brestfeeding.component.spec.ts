import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrestfeedingComponent } from './brestfeeding.component';

describe('BrestfeedingComponent', () => {
  let component: BrestfeedingComponent;
  let fixture: ComponentFixture<BrestfeedingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrestfeedingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrestfeedingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
