import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatingHomeComponent } from './floating-home.component';

describe('FloatingHomeComponent', () => {
  let component: FloatingHomeComponent;
  let fixture: ComponentFixture<FloatingHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FloatingHomeComponent]
    });
    fixture = TestBed.createComponent(FloatingHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
