import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddComponentComponent } from './add-component.component';

describe('AddComponentComponent', () => {
  let component: AddComponentComponent;
  let fixture: ComponentFixture<AddComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddComponentComponent]
    });
    fixture = TestBed.createComponent(AddComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
