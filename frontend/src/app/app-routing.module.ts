import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './signup/register/register.component';
import { LoginComponent } from './signup/login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HobbyaddComponent } from './hobbyadd/hobbyadd.component';
import { SkillsFormComponent } from './skills-form/skills-form.component';
import { AddprofessionComponent } from './addprofession/addprofession.component';
import { HomeComponent } from './home/home.component';
import { NewsfeedComponent } from './newsfeed/newsfeed.component';
import { ChatboxComponent } from './chatbox/chatbox.component';

const routes: Routes = [
  {path: "register", component: RegisterComponent},
  {path: "login", component: LoginComponent},
  {path: "profile/:id", component: ProfileComponent},
  {path: "about/:id", component: AboutComponent},
  {path: "contact/:id", component: ContactComponent},
  {path: "hobbies/:id", component: HobbyaddComponent},
  {path: 'skills-form/:id', component: SkillsFormComponent},
  {path: 'addprofession/:id', component: AddprofessionComponent},
  {path: 'home', component: HomeComponent},
  {path: "feed/:id", component: NewsfeedComponent},
  {path: 'chatbox/:auth_id', component: ChatboxComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
