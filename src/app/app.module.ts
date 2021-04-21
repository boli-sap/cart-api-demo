import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {BaseSiteService} from '@spartacus/core';

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        StoreModule.forRoot({}),
        AppRoutingModule,
    ],
  providers: [BaseSiteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
