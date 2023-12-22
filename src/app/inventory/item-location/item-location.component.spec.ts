import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemLocationComponent } from './item-location.component';

describe('ItemLocationComponent', () => {
  let component: ItemLocationComponent;
  let fixture: ComponentFixture<ItemLocationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemLocationComponent]
    });
    fixture = TestBed.createComponent(ItemLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
