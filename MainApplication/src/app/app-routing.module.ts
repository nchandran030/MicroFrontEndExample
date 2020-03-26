import { NestedViewComponent } from './nested-view/nested-view.component';
import { TreeViewComponent } from './tree-view/tree-view.component';
import { TableViewComponent } from './table-view/table-view.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path:  '', component:  NavBarComponent,
  children:[
    {path:'',component:TableViewComponent},
    {path:'tableView',component:TableViewComponent},
    {path:'treeView',component:TreeViewComponent},
    {path:'nestedView',component:NestedViewComponent}
  ]
},
{ path:  '**', component:  NavBarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
