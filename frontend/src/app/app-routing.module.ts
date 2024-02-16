import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './signup/register/register.component';
import { LoginComponent } from './signup/login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SkillsFormComponent } from './skills-form/skills-form.component';

const routes: Routes = [
  {path: "register", component: RegisterComponent},
  {path: "login", component: LoginComponent},
  {path: "profile/:id", component: ProfileComponent},
  {path: "about/:id", component: AboutComponent},
  {path: "contact/:id", component: ContactComponent},
  {path: 'skills-form/:id', component: SkillsFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
