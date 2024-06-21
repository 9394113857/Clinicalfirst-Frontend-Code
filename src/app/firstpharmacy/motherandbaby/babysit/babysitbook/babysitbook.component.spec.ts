import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BabysitbookComponent } from './babysitbook.component';

describe('BabysitbookComponent', () => {
  let component: BabysitbookComponent;
  let fixture: ComponentFixture<BabysitbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BabysitbookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BabysitbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
