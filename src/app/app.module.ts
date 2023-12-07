import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Component/header/header.component';
import { HomeComponent } from './Component/home/home.component';
import { FooterComponent } from './Component/footer/footer.component';
import { VisitRegistrationComponent } from './Component/visit-registration/visit-registration.component';
import { MatSelectModule } from '@angular/material/select';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { SidebarComponent } from './Component/dashboard/sidebar/sidebar.component';
import { DHomeComponent } from './Component/dashboard/d-home/d-home.component';
import { DefaultModule } from './Component/layouts/default/default.module';
// import { LoginComponent } from './Component/auth/login/login.component';
import { appRoutes } from './app.routing';
import { LayoutModule } from './layout/layout.module';
import { AuthModule } from './Component/auth/auth.module';
import {DropdownModule} from 'primeng/dropdown';
import { HeaderSecondaryComponent } from './Component/header-secondary/header-secondary.component';
import { FooterSecondaryComponent } from './Component/footer-secondary/footer-secondary.component';
// import { FooterSecondComponent } from './shared/components/footer/footer-second.component'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    VisitRegistrationComponent,
    SidebarComponent,
    DHomeComponent,
    HeaderSecondaryComponent,
    FooterSecondaryComponent,
    // FooterSecondComponent
    // LoginComponent, // Moved in auth Module


  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    // RouterModule.forRoot(appRoutes),
    MatSelectModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    DefaultModule,
    LayoutModule,
    AuthModule,
    DropdownModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
