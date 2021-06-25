import {Injectable} from '@angular/core';
import {ActiveCartService, CartVoucherService, StateWithProcess, UserIdService, SUBSCRIBE_CUSTOMER_COUPON_PROCESS_ID} from '@spartacus/core';
import {select, Store} from '@ngrx/store';
import {EMPTY, Observable} from 'rxjs';
import { ProcessSelectors } from '@spartacus/core';

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
    // this.combineUserAndCartId('cartId'); // see comment on line 23

    // Example of importing getProcessLoadingFactory
    this.store.pipe(
      select(ProcessSelectors.getProcessLoadingFactory(SUBSCRIBE_CUSTOMER_COUPON_PROCESS_ID))
    );

    // Example of importing getProcessSuccessFactory
    this.store.pipe(
      select(ProcessSelectors.getProcessSuccessFactory(SUBSCRIBE_CUSTOMER_COUPON_PROCESS_ID))
    );
  }

  /**
   * This private method is planned to be removed as part of future release so it should not become part of public API.
   * However since it is used only in CartVoucherService.addVoucher() and CartVoucherService.removeVoucher() public methods,
   * instead of overriding combineUserAndCartId, these two methods can be overriden with any custom logic
   * (the addVoucher() and removeVoucher() methods are very small, they only invoke combineUserAndCartId and subscribe to the result).
   */
  // combineUserAndCartId(cartId: string): Observable<[string, string]> {...}
}
