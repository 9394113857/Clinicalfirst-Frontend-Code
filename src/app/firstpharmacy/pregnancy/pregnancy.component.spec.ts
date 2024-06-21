import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PregnancyComponent } from './pregnancy.component';

describe('PregnancyComponent', () => {
  let component: PregnancyComponent;
  let fixture: ComponentFixture<PregnancyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PregnancyComponent]
    });
    fixture = TestBed.createComponent(PregnancyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
