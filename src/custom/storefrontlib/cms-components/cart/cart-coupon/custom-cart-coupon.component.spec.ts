import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomCartCouponComponent } from './custom-cart-coupon.component';
import {provideMockStore} from '@ngrx/store/testing';

describe('CustomCartCouponComponent', () => {
  let component: CustomCartCouponComponent;
  let fixture: ComponentFixture<CustomCartCouponComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomCartCouponComponent ],
      providers: [provideMockStore({})]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomCartCouponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
