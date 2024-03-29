import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewNavbarComponent } from './view-navbar.component';

const routes: Routes = [{
  path: '', component: ViewNavbarComponent, children: [
    { path: 'home', loadChildren: () => import('../view-home/view-home.module').then(m => m.ViewHomeModule) },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewNavbarRoutingModule { }
