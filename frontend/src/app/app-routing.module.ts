import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponentComponent } from './login-component/login-component.component';
import { UserListComponent } from './user-list/user-list.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { TimeEntryComponent } from './time-entry/time-entry.component';
import { ProjectsComponent } from './projects/projects.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { PeopleComponent } from './people/people.component';
import { NewProjectComponent } from './new-project/new-project.component';
import { EditprojectComponent } from './editproject/editproject.component';
import { TimeFormComponent } from './time-form/time-form.component';
import { EditTimeEntryComponent } from './edit-time-entry/edit-time-entry.component';
import { AddAssignmentComponent } from './add-assignment/add-assignment.component';



const routes: Routes = [
  
{path : 'users', component : UserListComponent},
{path: 'Login', component : LoginComponentComponent}, 
{path : '', redirectTo: '/sign-in', pathMatch : 'full'},
{ path: 'sign-in', component: LoginComponentComponent }, 
{ path: 'register-user', component: SignUpComponent }, 
{path : 'home', component: HomeComponent },
{path : 'time', component: TimeEntryComponent}, 
{path : 'projects', component: ProjectsComponent},
{path: 'navigation', component: NavBarComponent},
{path : 'profile/:id/:Lname/:FName/:Email/:Role', component: ProfilePageComponent},
{path : 'people', component: PeopleComponent},
{path : 'newProject', component: NewProjectComponent},
{path : 'editProject', component: EditprojectComponent},
{path: 'newTimeEntry', component: TimeFormComponent},
{path : 'editTimeEntry', component: EditTimeEntryComponent}, 
{path : 'addAssignment', component: AddAssignmentComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
