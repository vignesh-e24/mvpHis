import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MethodTestComponent } from './method-test.component';

describe('MethodTestComponent', () => {
  let component: MethodTestComponent;
  let fixture: ComponentFixture<MethodTestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MethodTestComponent]
    });
    fixture = TestBed.createComponent(MethodTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
