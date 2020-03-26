import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TableViewComponent } from './table-view/table-view.component';
import { TreeViewComponent } from './tree-view/tree-view.component';
import { NestedViewComponent } from './nested-view/nested-view.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    TableViewComponent,
    TreeViewComponent,
    NestedViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {
 }
