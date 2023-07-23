import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HieComponent } from './hie.component';

describe('HieComponent', () => {
  let component: HieComponent;
  let fixture: ComponentFixture<HieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HieComponent]
    });
    fixture = TestBed.createComponent(HieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
