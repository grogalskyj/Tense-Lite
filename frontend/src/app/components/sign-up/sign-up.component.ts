import { Component, OnInit } from '@angular/core';
import { StringLike } from '@firebase/util';
import { first } from 'rxjs';
import { AuthenticationService } from 'src/app/authentication.service';
import { UserService } from 'src/app/user.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  account_creation_message : string;


  constructor(
private authservice : AuthenticationService,
private userservice : UserService



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
 this.userservice.storeUsers(Firstname, Lastname, email, result)

 }


}



UserSignOut(){
  this.authservice.SignOut()
}




}

