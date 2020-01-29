import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgxBootstrapPaginationModule} from '../../../ngx-bootstrap-pagination/src/lib/ngx-bootstrap-pagination.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxBootstrapPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
