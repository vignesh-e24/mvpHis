import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabpatientComponent } from './labpatient.component';

describe('LabpatientComponent', () => {
  let component: LabpatientComponent;
  let fixture: ComponentFixture<LabpatientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LabpatientComponent]
    });
    fixture = TestBed.createComponent(LabpatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
