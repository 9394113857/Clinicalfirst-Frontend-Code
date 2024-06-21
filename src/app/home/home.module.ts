import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeoneComponent } from './homeone/homeone.component';


@NgModule({
  declarations: [
    HomeoneComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
  ],
})
export class HomeModule { }
