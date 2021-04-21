import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import {CustomCartModule} from '../custom/storefrontlib/cms-components/cart/custom-cart.module';
import { AppRoutingModule } from './app-routing.module';
import {BaseSiteService} from '@spartacus/core';

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        CustomCartModule,
        StoreModule.forRoot({}),
        AppRoutingModule,
    ],
  providers: [BaseSiteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
