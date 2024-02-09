import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpropicComponent } from './addpropic.component';

describe('AddpropicComponent', () => {
  let component: AddpropicComponent;
  let fixture: ComponentFixture<AddpropicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddpropicComponent]
    });
    fixture = TestBed.createComponent(AddpropicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
