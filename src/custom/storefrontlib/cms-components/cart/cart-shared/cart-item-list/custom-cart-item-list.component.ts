import { Component } from '@angular/core';
import {CartItemListComponent} from '@spartacus/storefront';
import {ActiveCartService, FeatureConfigService, MultiCartService, OrderEntry, SelectiveCartService, UserIdService} from '@spartacus/core';

@Component({
  selector: 'custom-cart-item-list',
  templateUrl: './custom-cart-item-list.component.html'
})
export class CustomCartItemListComponent extends CartItemListComponent {

  constructor(
    protected activeCartService: ActiveCartService,
    protected selectiveCartService: SelectiveCartService,
    public featureConfigService: FeatureConfigService,
    protected userIdService: UserIdService,
    protected multiCartService: MultiCartService
  ) {
    super(activeCartService, selectiveCartService, userIdService, multiCartService);
  }

  resolveItems(items: OrderEntry[]): void {
    super.resolveItems(items);
    console.log(this.userId);
    console.log(this.subscription);
    console.log(this.items);
    console.log(this._items);
  }

  createForm(): void {
    super.createForm();
  }
}
