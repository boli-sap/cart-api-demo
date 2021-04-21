import {MultiCartService, StateWithMultiCart, UserIdService} from '@spartacus/core';
import {Store} from '@ngrx/store';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CustomMultiCartService extends MultiCartService {
  constructor(
    protected store: Store<StateWithMultiCart>,
    protected userIdService: UserIdService,
  ) {
    super(store, userIdService);
  }

  testMethods(): void {
    this.generateTempCartId();
  }

  generateTempCartId(): string {
    console.log('generateTempCartId');
    return 'generateTempCartId';
  }
}
