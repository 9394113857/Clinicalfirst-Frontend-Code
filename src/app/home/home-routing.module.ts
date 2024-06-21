import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeoneComponent } from './homeone/homeone.component';

const routes: Routes = [
  {path:'one',component:HomeoneComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
