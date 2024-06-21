import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GynecologyComponent } from './gynecology.component';

describe('GynecologyComponent', () => {
  let component: GynecologyComponent;
  let fixture: ComponentFixture<GynecologyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GynecologyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GynecologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
