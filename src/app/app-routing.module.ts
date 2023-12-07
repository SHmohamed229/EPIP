import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Component/home/home.component';
import { VisitRegistrationComponent } from './Component/visit-registration/visit-registration.component';
import { DHomeComponent } from './Component/dashboard/d-home/d-home.component';
import { DefaultComponent } from './Component/layouts/default/default.component';
import { DashboardComponent } from './Component/modules/dashboard/dashboard.component';
import { PersonComponent } from './Component/modules/person/person.component';
import { LoginComponent } from './Component/auth/login/login.component';
import { RecoverPasswordComponent } from './Component/auth/recover-password/recover-password.component';
import { SignInComponent } from './Component/auth/sign-in/sign-in.component';
import { SignOutComponent } from './Component/auth/sign-out/sign-out.component';
import { SignUpComponent } from './Component/auth/sign-up/sign-up.component';
import { AuthGuard } from './core/guards/auth.guard';
import { NoAuthGuard } from './core/guards/no-auth.guard';
import { EmptyComponent } from './layout/empty/empty.component';

const routes: Routes = [
  // {path: 'dashboard' , children: [
  // {path: 'dHome' , component:DHomeComponent}
  // ], canActivate :[]},
  {path: '', redirectTo : '/home', pathMatch:'full'},
  {path: 'home', component:HomeComponent},
  {path: 'vRegistration', component:VisitRegistrationComponent},
  {path: 'login' , component: LoginComponent},
  {path: 'dashboard' , component:DefaultComponent , canActivate:[AuthGuard] , children: [
    {path: 'dashHome' , component: DashboardComponent},
    {path: 'person' , component: PersonComponent},
  ]},
  {
    path: '',
    component: EmptyComponent,
    canActivate:[NoAuthGuard],
    canActivateChild:[NoAuthGuard],
    children:[
      {
        path: 'login-t',
        component: SignInComponent
      },
      {
        path: 'register',
        component: SignUpComponent
      },
      {
        path: 'recover',
        component: RecoverPasswordComponent
      },
    ]
  },
  //Auth routes for authenticated users
  {
    path: '',
    component: EmptyComponent,
    canActivate:[AuthGuard],
    canActivateChild:[AuthGuard],
    children:[
      {
        path: 'logout',
        component: SignOutComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
