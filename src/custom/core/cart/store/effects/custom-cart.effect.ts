import {Injectable} from '@angular/core';
import {CartConnector, CartEffects, SiteContextActions, StateWithMultiCart} from '@spartacus/core';
import {Store} from '@ngrx/store';
import {Actions, ofType} from '@ngrx/effects';

@Injectable()
export class CustomCartEffect extends CartEffects {

  protected contextChange$ = this.actions$.pipe(
    ofType(
      SiteContextActions.BASE_SITE_CHANGE,
      SiteContextActions.CURRENCY_CHANGE,
      SiteContextActions.LANGUAGE_CHANGE
  ));

  constructor(
    protected actions$: Actions,
    protected cartConnector: CartConnector,
    protected store: Store<StateWithMultiCart>
  ) {
    super(actions$, cartConnector, store);
  }
}
