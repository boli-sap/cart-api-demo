import {Injectable} from '@angular/core';
import {
  ActiveCartService,
  Cart,
  getMultiCartReducers,
  MultiCartService,
  OrderEntry, StateUtils,
  StateWithMultiCart,
  UserIdService
} from '@spartacus/core';
import {EMPTY, Observable, of} from 'rxjs';
import {Store} from '@ngrx/store';


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
    const reducerMap = getMultiCartReducers();
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
  }

  loadOrMerge(cartId: string, userId: string, previousUserId: string): void {
    console.log('CustomActiveCartService::loadOrMerge');
  }

  load(cartId: string, userId: string): void {
    console.log('CustomActiveCartService::load');
  }

  addEntriesGuestMerge(cartEntries: OrderEntry[]): void {
    console.log('CustomActiveCartService::addEntriesGuestMerge');
  }

  requireLoadedCartForGuestMerge(): Observable<StateUtils.ProcessesLoaderState<Cart>> {
    console.log('CustomActiveCartService::requireLoadedCartForGuestMerge');
    return EMPTY;
  }

  isCartCreating(cartState: StateUtils.ProcessesLoaderState<Cart>, cartId: string): boolean {
    console.log('CustomActiveCartService::isCartCreating');
    return true;
  }

  isEmail(str: string): boolean {
    console.log('CustomActiveCartService::isEmail');
    return true;
  }

  guestCartMerge(cartId: string): void {
    console.log('CustomActiveCartService::guestCartMerge');
  }

  isEmpty(cart: Cart): boolean {
    console.log('CustomActiveCartService::isEmpty');
    return true;
  }

  isJustLoggedIn(userId: string, previousUserId: string): boolean {
    console.log('CustomActiveCartService::isJustLoggedIn');
    return true;
  }
}
