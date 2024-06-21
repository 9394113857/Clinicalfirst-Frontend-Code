import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BabyneobookComponent } from './babyneobook.component';

describe('BabyneobookComponent', () => {
  let component: BabyneobookComponent;
  let fixture: ComponentFixture<BabyneobookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BabyneobookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BabyneobookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
