import {Component, OnInit} from '@angular/core';
import {CustomMultiCartService} from '../custom/core/cart/facade/custom-multi-cart.service';
import {CustomCartVoucherService} from '../custom/core/cart/facade/custom-cart-voucher.service';
import {CustomActiveCartService} from '../custom/core/cart/facade/custom-active-cart.service';
import {CustomSelectiveCartService} from '../custom/core/cart/facade/custom-selective-cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit{

  constructor(
    protected customActiveCartService: CustomActiveCartService,
    protected customCartVoucherService: CustomCartVoucherService,
    protected customMultiCartService: CustomMultiCartService,
    protected customSelectiveCartService: CustomSelectiveCartService,
  ) {
  }

  title = 'cart-api-demo';

  ngOnInit(): void {
    this.customActiveCartService.testMethods();
    this.customCartVoucherService.testMethods();
    this.customMultiCartService.testMethods();
    this.customSelectiveCartService.testMethods();
  }
}
