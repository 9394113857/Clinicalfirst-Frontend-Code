import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from '../firstpharmacy/first/first.component';
import { SidebarComponent } from './sidebar/sidebar.component';

const routes: Routes = [
  {path:'service',component:SidebarComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SidebarsRoutingModule { }
