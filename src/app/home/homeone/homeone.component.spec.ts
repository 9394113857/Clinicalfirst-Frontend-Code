import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeoneComponent } from './homeone.component';

describe('HomeoneComponent', () => {
  let component: HomeoneComponent;
  let fixture: ComponentFixture<HomeoneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeoneComponent]
    });
    fixture = TestBed.createComponent(HomeoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
