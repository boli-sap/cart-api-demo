import {NgModule} from '@angular/core';
import {CustomAddToCartComponent} from './add-to-cart/custom-add-to-cart.component';
import { CustomAddedToCartDialogComponent } from './add-to-cart/custom-added-to-cart-dialog/custom-added-to-cart-dialog.component';
import { CustomAddToWishListComponent } from './add-to-wishlist/custom-add-to-wish-list.component';
import { CustomCartCouponComponent } from './cart-coupon/custom-cart-coupon.component';
import { CustomAppliedCouponsComponent } from './cart-coupon/applied-coupons/custom-applied-coupons.component';
import { CustomCartItemListComponent } from './cart-shared/cart-item-list/custom-cart-item-list.component';


@NgModule({
  exports: [
    CustomAddToCartComponent,
    CustomAddedToCartDialogComponent,
    CustomAddToWishListComponent,
    CustomAppliedCouponsComponent,
    CustomCartCouponComponent,
    CustomCartItemListComponent
  ],
  declarations: [
    CustomAddToCartComponent,
    CustomAddedToCartDialogComponent,
    CustomAddToWishListComponent,
    CustomCartCouponComponent,
    CustomAppliedCouponsComponent,
    CustomCartItemListComponent,
  ]
})
export class CustomCartModule {}
