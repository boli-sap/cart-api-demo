import { Component } from '@angular/core';
import {AddToWishListComponent, CurrentProductService} from '@spartacus/storefront';
import {AuthService, Product, WishListService} from '@spartacus/core';

@Component({
  selector: 'custom-add-to-wish-list',
  templateUrl: './custom-add-to-wish-list.component.html'
})
export class CustomAddToWishListComponent extends AddToWishListComponent{

  constructor(
    protected wishListService: WishListService,
    protected currentProductService: CurrentProductService,
    protected authService: AuthService
  ) {
    super(wishListService, currentProductService, authService);
  }

  setStockInfo(product: Product): void {
    super.setStockInfo(product);
  }
}
