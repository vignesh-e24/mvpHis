import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhmsComponent } from './phms.component';

describe('PhmsComponent', () => {
  let component: PhmsComponent;
  let fixture: ComponentFixture<PhmsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhmsComponent]
    });
    fixture = TestBed.createComponent(PhmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
