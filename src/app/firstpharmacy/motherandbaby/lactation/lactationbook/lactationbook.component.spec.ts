import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LactationbookComponent } from './lactationbook.component';

describe('LactationbookComponent', () => {
  let component: LactationbookComponent;
  let fixture: ComponentFixture<LactationbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LactationbookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LactationbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
