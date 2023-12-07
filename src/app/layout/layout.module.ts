import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default/default.component';
import { EmptyComponent } from './empty/empty.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    DefaultComponent,
    EmptyComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    
  ]
})
export class LayoutModule { }
