import {Injectable} from '@angular/core';
import {CartNotEmptyGuard} from '@spartacus/storefront';
import {Cart} from '@spartacus/core';

@Injectable({
  providedIn: 'root',
})
export class CustomCartNotEmptyGuard extends CartNotEmptyGuard {

  isEmpty(cart: Cart): boolean {
    return super.isEmpty(cart);
  }
}
