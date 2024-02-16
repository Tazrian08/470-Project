import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HobbyaddComponent } from './hobbyadd.component';

describe('HobbyaddComponent', () => {
  let component: HobbyaddComponent;
  let fixture: ComponentFixture<HobbyaddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HobbyaddComponent]
    });
    fixture = TestBed.createComponent(HobbyaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
