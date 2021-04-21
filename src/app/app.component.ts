import {Component, OnInit} from '@angular/core';
import {CustomActiveCartService} from '../custom/core/cart/facade/custom-active-cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit{

  constructor(
    protected customActiveCartService: CustomActiveCartService,
  ) {
  }

  title = 'cart-api-demo';

  ngOnInit(): void {
    this.customActiveCartService.testMethods();
  }
}
