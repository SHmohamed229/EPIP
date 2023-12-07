import { Routes } from "@angular/router";
import { EmptyComponent } from "./layout/empty/empty.component";
import { SignInComponent } from "./Component/auth/sign-in/sign-in.component";
import { SignUpComponent } from "./Component/auth/sign-up/sign-up.component";
import { RecoverPasswordComponent } from "./Component/auth/recover-password/recover-password.component";
import { SignOutComponent } from "./Component/auth/sign-out/sign-out.component";
import { DefaultComponent } from "./layout/default/default.component";
import { DashboardComponent } from "./Component/modules/dashboard/dashboard.component";
import { NoAuthGuard } from "./core/guards/no-auth.guard";
import { AuthGuard } from "./core/guards/auth.guard";
import { LoginComponent } from "./Component/auth/login/login.component";
import { SidebarComponent } from "./Component/dashboard/sidebar/sidebar.component";
import { HomeComponent } from "./Component/home/home.component";
import { VisitRegistrationComponent } from "./Component/visit-registration/visit-registration.component";
import { PersonComponent } from "./Component/modules/person/person.component";

export const appRoutes : Routes = [

  {path: '', redirectTo : '/home', pathMatch:'full'},
  {path: 'home', component:HomeComponent},
  {path: 'vRegistration', component:VisitRegistrationComponent},
  {path: 'sidebar' , component: SidebarComponent},
  {path: 'login' , component: LoginComponent},
  {path: 'dashboard' , component:DefaultComponent , children: [
    {path: 'dashHome' , component: DashboardComponent},
    {path: 'person' , component: PersonComponent},
  ]},
  //Auth routes for guest
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
  //Admin routes for authenticated users
  // {
  //   path: '',
  //   component: DefaultComponent,
  //   canActivate:[AuthGuard],
  //   canActivateChild:[AuthGuard],
  //   children:[
  //     {
  //       path: 'dashHome',
  //       component: DashboardComponent,
  //     },
  //     {
  //       path: 'person' ,
  //       component: PersonComponent
  //     },

  //   ]
  // },

  // {path:'' , redirectTo:"dashboard-t", pathMatch: 'full'}
]
