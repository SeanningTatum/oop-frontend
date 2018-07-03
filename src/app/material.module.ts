import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCheckboxModule
} from '@angular/material';

const matArray = [
  MatButtonModule, MatCheckboxModule
]

@NgModule({
  imports: [matArray],
  exports: [matArray],
})
export class MaterialModule { }
