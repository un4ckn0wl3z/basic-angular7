import { UnauthGuard } from './guards/unauth.guard';
import { DataComponent } from './components/data/data.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ActivateGuard } from './guards/activate.guard';
import { DeactivateGuard } from './guards/deactivate.guard';
import { AuthenGuard } from './guards/authen.guard';

const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'register',component: RegisterComponent, canActivate: [UnauthGuard]},
  {path:'login',component: LoginComponent, canActivate: [UnauthGuard]},
  {path:'profile',component: ProfileComponent, canActivate: [AuthenGuard]},
  {path:'data',component: DataComponent},

  {path:'**',redirectTo: '',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
