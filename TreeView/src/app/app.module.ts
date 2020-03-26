import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector  } from '@angular/core';
import { TreeModule } from 'angular-tree-component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TreeViewComponent } from './tree-view/tree-view.component';

import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    AppComponent,
    TreeViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TreeModule.forRoot()
  ],
  providers: [],
  bootstrap: [],
  entryComponents: [
    TreeViewComponent
  ]
})
export class AppModule {
  constructor(private injector: Injector) {
  }
  ngDoBootstrap() {
    const myCustomElement = createCustomElement(TreeViewComponent, { injector: this.injector });
    customElements.define('app-tree-view', myCustomElement);
  }
 }
