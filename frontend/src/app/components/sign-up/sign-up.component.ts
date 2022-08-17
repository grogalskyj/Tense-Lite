import { Component, EnvironmentInjector, OnInit } from '@angular/core';
import { StringLike } from '@firebase/util';
import { first } from 'rxjs';
import { AuthenticationService } from 'src/app/authentication.service';
import { UserService } from 'src/app/user.service';
import { TokenStorageService } from 'src/app/token-storage.service';
import { CurrencyPipe } from '@angular/common';
import { CurrentUserService } from 'src/app/current-user.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  account_creation_message : string;


  constructor(
private authservice : AuthenticationService,
private userservice : UserService,
private tokenservice : TokenStorageService,
private currentUser: CurrentUserService



  ) {
    this.account_creation_message = ""



   }

  ngOnInit(): void {}


async UserSignUp(email: string, password: string, Firstname: string, Lastname : string){

 var result = await this.authservice.CreateAccount(email, password)
 if (typeof result === "undefined"){
  console.log("Error")
 }
 else{

this.tokenservice.saveToken(result)
 this.userservice.storeUsers(Firstname, Lastname, email, result)

 }

 this.currentUser.saveUser(0, Lastname, Firstname,"Basic", email)


}



UserSignOut(){
  this.authservice.SignOut()
}

}



