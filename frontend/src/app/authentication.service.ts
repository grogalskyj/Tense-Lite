import { Injectable, resolveForwardRef, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';
import firebase from 'firebase/compat/app';
import { Router } from '@angular/router';
import { Token } from '@angular/compiler';
import { TokenStorageService } from './token-storage.service';




@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  "userData": Observable<firebase.User | null>
  "userToken" : string
  "IsUserLoggedIn" : Boolean
  // "accessToken" : string



  constructor(private angularFireAuth: AngularFireAuth, private router : Router, private tokenStorage : TokenStorageService) {
    this.userData = angularFireAuth.authState
    this.IsUserLoggedIn = false

  }

   ngOnInit(){


   }

  async CreateAccount(email: string, password: string){

  
 var res = await firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((result) => {this.router.navigate(['/time'])}).then(this.GetAccessToken).then((tok) => tok)
    .catch((error) => console.log(error))

  return res
   }

   async SignIn(email : string, password: string){
  var res =  await firebase.auth().signInWithEmailAndPassword(email, password)
    .then((result) =>  this.router.navigate(['/time'])).then(this.GetAccessToken).then((tok) => tok)
   .catch((error) => this.router.navigate(['/sign-in']).then(() => console.log(error)))

   return res
   }

   SignOut(){
    return firebase.auth().signOut()
   }

   CheckAuthState(){
    this.userData.subscribe(user => {
      if (user != null){
        this.IsUserLoggedIn = true
        console.log('hererio cheerio')
        


      }
      else {
        this.IsUserLoggedIn = false
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

  isLoggedin() : Boolean{
    return this.IsUserLoggedIn
  }





}


