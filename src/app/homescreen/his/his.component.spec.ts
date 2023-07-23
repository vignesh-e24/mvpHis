import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HisComponent } from './his.component';

describe('HisComponent', () => {
  let component: HisComponent;
  let fixture: ComponentFixture<HisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HisComponent]
    });
    fixture = TestBed.createComponent(HisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
