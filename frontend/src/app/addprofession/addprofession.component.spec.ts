import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddprofessionComponent } from './addprofession.component';

describe('AddprofessionComponent', () => {
  let component: AddprofessionComponent;
  let fixture: ComponentFixture<AddprofessionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddprofessionComponent]
    });
    fixture = TestBed.createComponent(AddprofessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
