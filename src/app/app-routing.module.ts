import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./modules/view-navbar/view-navbar.module').then(m => m.ViewNavbarModule) },
  { path: 'login', loadChildren: () => import('./modules/view-login/view-login.module').then(m => m.ViewLoginModule) },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
