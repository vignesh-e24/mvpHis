import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorklistComponent } from './worklist.component';

describe('WorklistComponent', () => {
  let component: WorklistComponent;
  let fixture: ComponentFixture<WorklistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorklistComponent]
    });
    fixture = TestBed.createComponent(WorklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
