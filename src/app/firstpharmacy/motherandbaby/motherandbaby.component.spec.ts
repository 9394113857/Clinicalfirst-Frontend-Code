import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotherandbabyComponent } from './motherandbaby.component';

describe('MotherandbabyComponent', () => {
  let component: MotherandbabyComponent;
  let fixture: ComponentFixture<MotherandbabyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotherandbabyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MotherandbabyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
