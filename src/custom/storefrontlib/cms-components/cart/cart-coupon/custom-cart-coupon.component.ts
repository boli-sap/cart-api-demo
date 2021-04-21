import { Component, OnInit } from '@angular/core';
import {CartCouponComponent} from '@spartacus/storefront';
import {ActiveCartService, CartVoucherService, CustomerCouponService} from '@spartacus/core';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'custom-cart-coupon',
  templateUrl: './custom-cart-coupon.component.html'
})
export class CustomCartCouponComponent extends CartCouponComponent {
  constructor(
    protected cartVoucherService: CartVoucherService,
    protected formBuilder: FormBuilder,
    protected customerCouponService: CustomerCouponService,
    protected activeCartService: ActiveCartService
  ) {
    super(cartVoucherService, formBuilder, customerCouponService, activeCartService);
    console.log(this.ignoreCloseEvent);
    console.log(this.subscription);
  }

}
