import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PregnancybookComponent } from './pregnancybook.component';

describe('PregnancybookComponent', () => {
  let component: PregnancybookComponent;
  let fixture: ComponentFixture<PregnancybookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PregnancybookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PregnancybookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
