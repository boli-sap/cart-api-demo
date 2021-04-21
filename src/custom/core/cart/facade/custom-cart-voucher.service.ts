import {Injectable} from '@angular/core';
import {ActiveCartService, CartVoucherService, StateWithProcess, UserIdService} from '@spartacus/core';
import {Store} from '@ngrx/store';
import {EMPTY, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomCartVoucherService extends CartVoucherService {

  constructor(
    protected store: Store<StateWithProcess<void>>,
    protected activeCartService: ActiveCartService,
    protected userIdService: UserIdService,
  ) {
    super(store, activeCartService, userIdService);
  }

  testMethods(): void {
    this.combineUserAndCartId('cartId');
  }

  combineUserAndCartId(cartId: string): Observable<[string, string]> {
    console.log('combineUserAndCartId');
    return EMPTY;
  }
}

