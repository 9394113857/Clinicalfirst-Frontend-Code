import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BpsubscribeComponent } from './bpsubscribe.component';

describe('BpsubscribeComponent', () => {
  let component: BpsubscribeComponent;
  let fixture: ComponentFixture<BpsubscribeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BpsubscribeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BpsubscribeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
