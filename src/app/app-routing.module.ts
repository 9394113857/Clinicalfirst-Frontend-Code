import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./firstpharmacy/firstpharmacy.module').then(m => m.FirstpharmacyModule) },
  { path: 'mainServices', loadChildren: () => import('./sidebars/sidebars.module').then(m => m.SidebarsModule) },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'reg', loadChildren: () => import('./registration/registration.module').then(m => m.RegistrationModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
