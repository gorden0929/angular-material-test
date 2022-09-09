import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewLoginRoutingModule } from './view-login-routing.module';
import { ViewLoginComponent } from './view-login.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    ViewLoginComponent
  ],
  imports: [
    CommonModule,
    ViewLoginRoutingModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class ViewLoginModule { }
