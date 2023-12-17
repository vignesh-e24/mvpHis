import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RisComponent } from './ris.component';

describe('RisComponent', () => {
  let component: RisComponent;
  let fixture: ComponentFixture<RisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RisComponent]
    });
    fixture = TestBed.createComponent(RisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
