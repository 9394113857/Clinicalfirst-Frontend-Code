import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadiologybookComponent } from './radiologybook.component';

describe('RadiologybookComponent', () => {
  let component: RadiologybookComponent;
  let fixture: ComponentFixture<RadiologybookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadiologybookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RadiologybookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
