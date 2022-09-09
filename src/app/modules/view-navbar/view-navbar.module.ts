import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewNavbarRoutingModule } from './view-navbar-routing.module';
import { ViewNavbarComponent } from './view-navbar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    ViewNavbarComponent
  ],
  imports: [
    CommonModule,
    ViewNavbarRoutingModule,    
    MatGridListModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule
  ]
})
export class ViewNavbarModule { }
