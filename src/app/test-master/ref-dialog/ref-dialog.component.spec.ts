import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefDialogComponent } from './ref-dialog.component';

describe('RefDialogComponent', () => {
  let component: RefDialogComponent;
  let fixture: ComponentFixture<RefDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RefDialogComponent]
    });
    fixture = TestBed.createComponent(RefDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
