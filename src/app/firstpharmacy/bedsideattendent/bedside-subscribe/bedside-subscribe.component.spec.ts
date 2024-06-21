import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BedsideSubscribeComponent } from './bedside-subscribe.component';

describe('BedsideSubscribeComponent', () => {
  let component: BedsideSubscribeComponent;
  let fixture: ComponentFixture<BedsideSubscribeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BedsideSubscribeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BedsideSubscribeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
