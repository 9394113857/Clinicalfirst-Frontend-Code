import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BpmonitoringComponent } from './bpmonitoring.component';

describe('BpmonitoringComponent', () => {
  let component: BpmonitoringComponent;
  let fixture: ComponentFixture<BpmonitoringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BpmonitoringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BpmonitoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
