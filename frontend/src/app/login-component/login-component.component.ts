import { Component, OnInit } from '@angular/core';
import {Injectable} from '@angular/core'
import { AuthenticationService } from '../authentication.service';
import {MatDividerModule} from '@angular/material/divider';
import { MatButton } from '@angular/material/button';
import { UserService } from '../user.service';
import { CurrentUserService } from '../current-user.service';



@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.scss']
})
export class LoginComponentComponent implements OnInit {

  constructor( private authservice : AuthenticationService, private userservice : UserService, public currUser: CurrentUserService) {


   }

  ngOnInit(): void {
  }

async UserLogin(username : string, password : string){
  this.authservice.SignIn(username, password)
 var currentUser = await this.userservice.getUser(username)
  if (typeof currentUser === undefined){
    console.log('beam me up scotty')

  }
  else{

    currentUser.subscribe(
      obsuser => this.currUser.user = obsuser
    )
  }
 }


}

