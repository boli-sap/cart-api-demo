import { Component } from '@angular/core';
import {AddedToCartDialogComponent, ModalService, PromotionService} from '@spartacus/storefront';
import {ActiveCartService, OrderEntry} from '@spartacus/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'custom-added-to-cart-dialog',
  templateUrl: './custom-added-to-cart-dialog.component.html'
})
export class CustomAddedToCartDialogComponent extends AddedToCartDialogComponent{

  constructor(
    protected modalService: ModalService,
    protected cartService: ActiveCartService,
    protected promotionService: PromotionService
  ) {
    super(modalService, cartService, promotionService);
  }

  getFormControl(entry: OrderEntry): FormControl {
    // console.log(this.quantityControl$);
    return null;
  }
}
