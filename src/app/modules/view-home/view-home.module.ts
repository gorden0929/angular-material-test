import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewHomeRoutingModule } from './view-home-routing.module';
import { ViewHomeComponent } from './view-home.component';
import { ReactiveFormsModule } from '@angular/forms';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    ViewHomeComponent
  ],
  imports: [
    CommonModule,
    ViewHomeRoutingModule,
    ReactiveFormsModule,

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
export class ViewHomeModule { }
