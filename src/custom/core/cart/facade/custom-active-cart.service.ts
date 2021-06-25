import {Injectable} from '@angular/core';
import {
  ActiveCartService,
  Cart,
  // getMultiCartReducers, <-- code related to ngrx implementation - not to be exposed as part public API
  MultiCartService,
  OrderEntry,
  StateWithMultiCart,
  UserIdService
} from '@spartacus/core';
import {EMPTY, Observable, of} from 'rxjs';
import {Store} from '@ngrx/store';
import {StateUtils} from '@spartacus/core';

@Injectable({
  providedIn: 'root',
})
export class CustomActiveCartService extends ActiveCartService {

  constructor(
    protected store: Store<StateWithMultiCart>,
    protected multiCartService: MultiCartService,
    protected userIdService: UserIdService
  ) {
    super(store, multiCartService, userIdService);
  }

  testMethods(): void {
    this.initActiveCart();
    this.loadOrMerge('cartId', 'userId', 'pId');
    this.load('cartId', 'userId');
    this.addEntriesGuestMerge([{}]);
    this.requireLoadedCartForGuestMerge();
    this.isCartCreating(null, 'cartId');
    this.isEmail('email');
    this.guestCartMerge('cartId');
    this.isEmpty({});
    this.isJustLoggedIn('userId', 'previousUserId');
  }

  initActiveCart(): void {
    this.activeCart$ = of(null);
    this.activeCartId$ = of('activeCartId');
    this.cartSelector$ = of(null);

    // const reducerMap = getMultiCartReducers(); <-- code related to ngrx implementation - not to be exposed as part public API
  }

  loadOrMerge(cartId: string, userId: string, previousUserId: string): void {
    console.log('loadOrMerge');
  }

  load(cartId: string, userId: string): void {
    console.log('load');
  }

  addEntriesGuestMerge(cartEntries: OrderEntry[]): void {
    console.log('addEntriesGuestMerge');
  }

  requireLoadedCartForGuestMerge(): Observable<StateUtils.ProcessesLoaderState<Cart>> {
    console.log('requireLoadedCartForGuestMerge');
    return EMPTY;
  }

  isCartCreating(cartState: StateUtils.ProcessesLoaderState<Cart>, cartId: string): boolean {
    console.log('isCartCreating');
    return true;
  }

  isEmail(str: string): boolean {
    console.log('isEmail');
    return true;
  }

  guestCartMerge(cartId: string): void {
    console.log('guestCartMerge');
  }

  isEmpty(cart: Cart): boolean {
    console.log('isEmpty');
    return true;
  }

  isJustLoggedIn(userId: string, previousUserId: string): boolean {
    console.log('isJustLoggedIn');
    return true;
  }
}
