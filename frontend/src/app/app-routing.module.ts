import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './signup/register/register.component';
import { LoginComponent } from './signup/login/login.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path: "register", component: RegisterComponent},
  {path: "login", component: LoginComponent},
  {path: "profile/:id", component: ProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
