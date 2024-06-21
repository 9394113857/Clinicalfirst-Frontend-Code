import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GynecologybookComponent } from './gynecologybook.component';

describe('GynecologybookComponent', () => {
  let component: GynecologybookComponent;
  let fixture: ComponentFixture<GynecologybookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GynecologybookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GynecologybookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
