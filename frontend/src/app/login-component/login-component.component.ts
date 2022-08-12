import { Component, OnInit } from '@angular/core';
import {Injectable} from '@angular/core'
import { AuthenticationService } from '../authentication.service';
import {MatDividerModule} from '@angular/material/divider';
import { MatButton } from '@angular/material/button';
import { UserService } from '../user.service';
import { CurrentUserService } from '../current-user.service';
import { TokenStorageService } from '../token-storage.service';



@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.scss']
})
export class LoginComponentComponent implements OnInit {

  constructor( private authservice : AuthenticationService, private userservice : UserService, public currUser: CurrentUserService,
    private tokservice: TokenStorageService, private currentuserservice : CurrentUserService) {


   }

  ngOnInit(): void {
  }

async UserLogin(username : string, password : string){
var res = await  this.authservice.SignIn(username, password)
 var currentUser = await this.userservice.getUser(username)
  if (typeof currentUser === undefined){
    console.log('beam me up scotty')
  }
  else if (res == undefined){
    console.log('beam me up scotty 2')

  }
  else {
    currentUser.subscribe(user => {var map =  Object.entries(user)
      var id_Users= 0
      var lastName = ""
      var FirstName = ""
      var Enabled = ""
      var email = ""

      map.forEach(function (keyval){
        if (keyval[0] == "id_Users"){
          id_Users = keyval[1]
        }
        if (keyval[0] == "lastName"){
          lastName  = keyval[1]
        }

        if (keyval[0] == "first_Name"){
          FirstName = keyval[1]
        }
        if(keyval[0] == "enabled"){
           Enabled = keyval[1]
        }
        if(keyval[0] == "email"){
          email = keyval[1]

        }
      
      })

      this.currentuserservice.saveUser(id_Users, lastName, FirstName,
        Enabled, email)
 
 
 
 
    })
    this.tokservice.saveToken(res)


  }



  }




}




