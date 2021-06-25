import {Injectable} from '@angular/core';
import {
  BaseSiteService, Cart,
  CartConfigService,
  MultiCartService,
  SelectiveCartService,
  StateWithMultiCart,
  UserIdService,
  UserService
} from '@spartacus/core';
import {BehaviorSubject, of} from 'rxjs';
import {Store} from '@ngrx/store';

@Injectable({
  providedIn: 'root',
})
export class CustomSelectiveCartService extends SelectiveCartService {
  constructor(
    protected store: Store<StateWithMultiCart>,
    protected userService: UserService,
    protected multiCartService: MultiCartService,
    protected baseSiteService: BaseSiteService,
    protected cartConfigService: CartConfigService,
    protected userIdService: UserIdService
  ) {
    super(store, userService, multiCartService, baseSiteService, cartConfigService, userIdService);
    this.customerId = 'customerId';
    this.userId = 'userId';
    this.cartId = 'cartId';
    this.selectiveCart$ = of(null);
    this.cartSelector$ = of(null);
    this.cartId$ = new BehaviorSubject<string>('cartId$');
    console.log(this.PREVIOUS_USER_ID_INITIAL_VALUE);
    console.log(this.previousUserId);
  }

  testMethods(): void {
    this.load();
    this.isEmpty({});
    this.isJustLoggedIn('userId');
    this.isLoggedIn('userId');
  }

  load(): void {
    console.log('load');
  }

  isEmpty(cart: Cart): boolean {
    console.log('isEmpty');
    return true;
  }

  isJustLoggedIn(userId: string): boolean {
    console.log('isJustLoggedIn');
    return true;
  }

  isLoggedIn(userId: string): boolean {
    console.log('isLoggedIn');
    return true;
  }
}
