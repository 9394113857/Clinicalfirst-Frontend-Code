import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BabycarebookComponent } from './babycarebook.component';

describe('BabycarebookComponent', () => {
  let component: BabycarebookComponent;
  let fixture: ComponentFixture<BabycarebookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BabycarebookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BabycarebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
