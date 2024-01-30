import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAddPatientComponent } from './edit-add-patient.component';

describe('EditAddPatientComponent', () => {
  let component: EditAddPatientComponent;
  let fixture: ComponentFixture<EditAddPatientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditAddPatientComponent]
    });
    fixture = TestBed.createComponent(EditAddPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
