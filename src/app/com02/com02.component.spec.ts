import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Com02Component } from './com02.component';

describe('Com02Component', () => {
  let component: Com02Component;
  let fixture: ComponentFixture<Com02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Com02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Com02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
