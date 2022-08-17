import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponentComponent } from './login-component/login-component.component';
import { environment} from "src/environments/environment";
import { AngularFireModule } from "@angular/fire/compat";
import {AngularFireDatabaseModule} from '@angular/fire/compat/database';
import { AngularFireAuthModule, USE_EMULATOR as USE_AUTH_EMULATOR } from "@angular/fire/compat/auth";
import {firebase, firebaseui, FirebaseUIModule} from 'firebaseui-angular';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import {MatDividerModule} from '@angular/material/divider'
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { HttpInterceptorService } from './http-interceptor.service';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import { ProjectsComponent } from './projects/projects.component';
import { TimeEntryComponent } from './time-entry/time-entry.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { PeopleComponent } from './people/people.component';
import { NewProjectComponent } from './new-project/new-project.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { EditprojectComponent } from './editproject/editproject.component';
import { DatePipe } from '@angular/common';
import { TimeFormComponent } from './time-form/time-form.component';
import { EditTimeEntryComponent } from './edit-time-entry/edit-time-entry.component';
import {MatTableModule} from '@angular/material/table';
import { AddAssignmentComponent } from './add-assignment/add-assignment.component';






const firebaseUiAuthConfig: firebaseui.auth.Config = {
  signInSuccessUrl: '/home',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,

  ],


  tosUrl: '<your-tos-link>',
  privacyPolicyUrl: '<your-privacyPolicyUrl-link>',
  credentialHelper: firebaseui.auth.CredentialHelper.GOOGLE_YOLO
};







@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    LoginComponentComponent,
    SignUpComponent,
    HomeComponent,
    ProjectsComponent,
    TimeEntryComponent,
    NavBarComponent,
    ProfilePageComponent,
    PeopleComponent,
    NewProjectComponent,
    EditprojectComponent,
    TimeFormComponent,
    EditTimeEntryComponent,
    AddAssignmentComponent
  ],
  imports: [
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatSidenavModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule, 
    FirebaseUIModule.forRoot(firebaseUiAuthConfig), 
    BrowserAnimationsModule, 
    MatInputModule,
    MatIconModule,
    MatToolbarModule, 
    MatSelectModule, 
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule
  ],
  providers: [ DatePipe,  {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
