import { Component, OnInit } from '@angular/core';
import {AppliedCouponsComponent} from '@spartacus/storefront';
import {CartVoucherService} from '@spartacus/core';

@Component({
  selector: 'custom-applied-coupons',
  templateUrl: './custom-applied-coupons.component.html'
})
export class CustomAppliedCouponsComponent extends AppliedCouponsComponent{

  constructor(protected cartVoucherService: CartVoucherService) {
    super(cartVoucherService);
  }
}
