import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RehabilitationComponent } from './rehabilitation.component';

describe('RehabilitationComponent', () => {
  let component: RehabilitationComponent;
  let fixture: ComponentFixture<RehabilitationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RehabilitationComponent]
    });
    fixture = TestBed.createComponent(RehabilitationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
