import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NutditbookComponent } from './nutditbook.component';

describe('NutditbookComponent', () => {
  let component: NutditbookComponent;
  let fixture: ComponentFixture<NutditbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NutditbookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NutditbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
