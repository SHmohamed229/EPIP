import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterSecondComponent } from './components/footer/footer-second.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AreaComponent } from './widgets/area/area.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';

import { RouterModule } from '@angular/router';
import { appRoutes } from '../app.routing';


const NgMaterial = [
  MatToolbarModule,
  MatSidenavModule,
  MatButtonModule,
  MatIconModule,
  MatDividerModule,
  MatListModule,
  MatMenuModule,
]


@NgModule({
  declarations: [
    HeaderComponent,
    FooterSecondComponent,
    SidebarComponent,
    AreaComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    NgMaterial
  ],
  exports: [
    HeaderComponent,
    FooterSecondComponent,
    SidebarComponent,
    AreaComponent,
  ]
})
export class SharedModule { }
