import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThpComponent } from './thp.component';

describe('ThpComponent', () => {
  let component: ThpComponent;
  let fixture: ComponentFixture<ThpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThpComponent]
    });
    fixture = TestBed.createComponent(ThpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
