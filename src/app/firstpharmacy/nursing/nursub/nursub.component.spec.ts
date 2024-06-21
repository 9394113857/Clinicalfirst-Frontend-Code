import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NursubComponent } from './nursub.component';

describe('NursubComponent', () => {
  let component: NursubComponent;
  let fixture: ComponentFixture<NursubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NursubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NursubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
