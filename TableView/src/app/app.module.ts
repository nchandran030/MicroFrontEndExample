import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableHomeComponent } from './table-home/table-home.component';

import { createCustomElement } from '@angular/elements'

@NgModule({
  declarations: [
    AppComponent,
    TableHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [],
  entryComponents: [
    TableHomeComponent
  ]
})
export class AppModule { 
  constructor(private injector: Injector) {
  }
  ngDoBootstrap() {
    const myCustomElement = createCustomElement(TableHomeComponent, { injector: this.injector });
    customElements.define('app-table-home', myCustomElement);
  }
}
