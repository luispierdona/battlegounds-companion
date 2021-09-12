import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifetimePage } from './lifetime.page';

describe('LifetimePage', () => {
  let component: LifetimePage;
  let fixture: ComponentFixture<LifetimePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifetimePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifetimePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
