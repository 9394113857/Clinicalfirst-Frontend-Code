import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrestfeedingbookComponent } from './brestfeedingbook.component';

describe('BrestfeedingbookComponent', () => {
  let component: BrestfeedingbookComponent;
  let fixture: ComponentFixture<BrestfeedingbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrestfeedingbookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrestfeedingbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
