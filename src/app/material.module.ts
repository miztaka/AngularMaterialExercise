import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatToolbarModule, 
  MatButtonModule,
  MatCardModule,
  MatListModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatSnackBarModule
} from '@angular/material';

const matModules = [
  BrowserAnimationsModule,
  MatToolbarModule, 
  MatButtonModule,
  MatCardModule,
  MatListModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatSnackBarModule,
  ReactiveFormsModule
];

@NgModule({
  imports: matModules,
  exports: matModules,
})
export class CustomMaterialModule { }