import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMemberComponent } from './form-member.component';

describe('FormMemberComponent', () => {
  let component: FormMemberComponent;
  let fixture: ComponentFixture<FormMemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormMemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
