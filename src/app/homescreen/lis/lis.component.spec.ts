import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LisComponent } from './lis.component';

describe('LisComponent', () => {
  let component: LisComponent;
  let fixture: ComponentFixture<LisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LisComponent]
    });
    fixture = TestBed.createComponent(LisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
