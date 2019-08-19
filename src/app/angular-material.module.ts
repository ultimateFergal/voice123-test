import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatGridListModule,
  MatListModule,
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatIconModule,
  MatMenuModule,
  MatCardModule,
  MatInputModule,
  MatSidenavModule,
  MatTableModule,
  MatDialogModule
} from '@angular/material';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatGridListModule,
    MatListModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule,
    MatInputModule,
    MatSidenavModule,
    MatTableModule,
    MatDialogModule
  ],
  exports: [
    MatGridListModule,
    MatListModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule,
    MatInputModule,
    MatSidenavModule,
    MatTableModule,
    MatDialogModule
  ]
})
export class AngularMaterialModule { }
