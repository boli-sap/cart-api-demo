import { Component } from '@angular/core';
import {AddedToCartDialogComponent, ModalService} from '@spartacus/storefront';
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
  ) {
    super(modalService, cartService);
  }

  getQuantityFormControl(entry: OrderEntry): FormControl { // <-- method name was changed
    console.log(this.quantityControl$);
    return null;
  }
}
