import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomCartItemListComponent } from './custom-cart-item-list.component';

describe('CustomCartItemListComponent', () => {
  let component: CustomCartItemListComponent;
  let fixture: ComponentFixture<CustomCartItemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomCartItemListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomCartItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
