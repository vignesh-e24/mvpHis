import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacsComponent } from './pacs.component';

describe('PacsComponent', () => {
  let component: PacsComponent;
  let fixture: ComponentFixture<PacsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PacsComponent]
    });
    fixture = TestBed.createComponent(PacsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
