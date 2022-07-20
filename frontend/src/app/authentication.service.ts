import { Injectable, resolveForwardRef, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';
import firebase from 'firebase/compat/app';
import { Router } from '@angular/router';
import { Token } from '@angular/compiler';




@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  "userData": Observable<firebase.User | null>
  "userToken" : string



  constructor(private angularFireAuth: AngularFireAuth, private router : Router) {
    this.userData = angularFireAuth.authState

  }

   ngOnInit(){


   }

  async CreateAccount(email: string, password: string){

  
 var res = await firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((result) => {this.router.navigate(['/home'])}).then(this.GetAccessToken).then((tok) => tok)
    .catch((error) => console.log(error))

  return res
   }

   SignIn(email : string, password: string){
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((result) => this.router.navigate(['/home']))
   .catch((error) => this.router.navigate(['/sign-in']))

   }

   SignOut(){
    return firebase.auth().signOut
   }

   CheckAuthState(){
    this.userData.subscribe(user => {
      if (user){

      }
      else {

        this.router.navigate(['/Login'])

      }
    })
   }


   async GetAccessToken() : Promise<string>

  {
    var currentUser =firebase.auth().currentUser
    if (currentUser == null){
      return ""
      
    }
    else{
   var token = await currentUser.getIdToken(true).then((tok) => tok)
     

    }

    return token  


  }





}


