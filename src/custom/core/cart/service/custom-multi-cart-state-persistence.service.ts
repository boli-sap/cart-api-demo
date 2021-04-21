import {
  MultiCartStatePersistenceService,
  SiteContextParamsService,
  StatePersistenceService,
  StateWithMultiCart
} from '@spartacus/core';
import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Subscription} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomMultiCartStatePersistenceService extends MultiCartStatePersistenceService {
  protected subscription = new Subscription();

  constructor(
    protected statePersistenceService: StatePersistenceService,
    protected store: Store<StateWithMultiCart>,
    protected siteContextParamsService: SiteContextParamsService
  ) {
    super(statePersistenceService, store, siteContextParamsService);
  }

}
