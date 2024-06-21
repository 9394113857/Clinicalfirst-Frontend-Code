import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BponetimeComponent } from './bponetime.component';

describe('BponetimeComponent', () => {
  let component: BponetimeComponent;
  let fixture: ComponentFixture<BponetimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BponetimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BponetimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
