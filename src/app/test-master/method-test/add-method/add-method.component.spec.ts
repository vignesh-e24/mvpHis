import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMethodComponent } from './add-method.component';

describe('AddMethodComponent', () => {
  let component: AddMethodComponent;
  let fixture: ComponentFixture<AddMethodComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddMethodComponent]
    });
    fixture = TestBed.createComponent(AddMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
