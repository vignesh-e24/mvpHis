import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultTypeComponent } from './result-type.component';

describe('ResultTypeComponent', () => {
  let component: ResultTypeComponent;
  let fixture: ComponentFixture<ResultTypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResultTypeComponent]
    });
    fixture = TestBed.createComponent(ResultTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
