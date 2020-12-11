import { ComponentFixture, TestBed } from '@angular/core/testing';

import { studentcomponent } from './student.component';

describe('studentcomponent', () => {
  let component: studentcomponent;
  let fixture: ComponentFixture<studentcomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ studentcomponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(studentcomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
