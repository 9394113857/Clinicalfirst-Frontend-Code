import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BabysitComponent } from './babysit.component';

describe('BabysitComponent', () => {
  let component: BabysitComponent;
  let fixture: ComponentFixture<BabysitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BabysitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BabysitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
