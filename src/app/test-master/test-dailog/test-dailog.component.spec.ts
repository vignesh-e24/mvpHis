import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestDailogComponent } from './test-dailog.component';

describe('TestDailogComponent', () => {
  let component: TestDailogComponent;
  let fixture: ComponentFixture<TestDailogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestDailogComponent]
    });
    fixture = TestBed.createComponent(TestDailogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
