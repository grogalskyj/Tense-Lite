import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponentComponent } from './login-component/login-component.component';
import { UserListComponent } from './user-list/user-list.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  
{path : 'users', component : UserListComponent},
{path: 'Login', component : LoginComponentComponent}, 
{path : '', redirectTo: '/sign-in', pathMatch : 'full'},
{ path: 'sign-in', component: LoginComponentComponent }, 
{ path: 'register-user', component: SignUpComponent }, 
{path : 'home', component: HomeComponent }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
