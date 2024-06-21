import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarsRoutingModule } from './sidebars-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FirstpharmacyRoutingModule } from '../firstpharmacy/firstpharmacy-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SidebarComponent
  ],
  imports: [
    CommonModule,
    SidebarsRoutingModule,
    FirstpharmacyRoutingModule,
    
    
  ],
  exports:[
    SidebarComponent,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class SidebarsModule { }
