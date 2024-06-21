import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BabyneoComponent } from './babyneo.component';

describe('BabyneoComponent', () => {
  let component: BabyneoComponent;
  let fixture: ComponentFixture<BabyneoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BabyneoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BabyneoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
