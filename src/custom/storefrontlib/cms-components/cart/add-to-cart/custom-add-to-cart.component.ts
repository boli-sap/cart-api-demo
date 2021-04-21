import {ChangeDetectorRef, Component} from '@angular/core';
import {AddToCartComponent, CurrentProductService, ModalService} from '@spartacus/storefront';
import {ActiveCartService, OrderEntry} from '@spartacus/core';

@Component({
  selector: 'custom-add-to-cart',
  templateUrl: './custom-add-to-cart.component.html'
})
export class CustomAddToCartComponent extends AddToCartComponent{

  constructor(
    protected modalService: ModalService,
    protected currentProductService: CurrentProductService,
    protected cd: ChangeDetectorRef,
    protected activeCartService: ActiveCartService
  ) {
    super(modalService, currentProductService, cd, activeCartService);
  }

  resolveItems(items: OrderEntry[]): void {
    console.log('resolveItems');
  }

  createForm(): void {
    console.log('createForm');
  }

}
