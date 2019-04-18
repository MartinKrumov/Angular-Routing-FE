import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {CoreModule} from './core/core.module';
import {HttpClientModule} from '@angular/common/http';
import {DetailComponent} from './detail/detail.component';
import {ListComponent} from './list/list.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {WalletComponent} from './wallet/wallet.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    DetailComponent,
    ListComponent,
    NotFoundComponent,
    WalletComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
