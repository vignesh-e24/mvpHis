import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomescreenComponent } from './homescreen.component';

describe('HomescreenComponent', () => {
  let component: HomescreenComponent;
  let fixture: ComponentFixture<HomescreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomescreenComponent]
    });
    fixture = TestBed.createComponent(HomescreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
