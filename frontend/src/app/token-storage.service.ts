import { Injectable } from '@angular/core';


const TOK_KEY = 'auth-token'
const USER_KEY = 'user-key'


@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }

  signOut(){
window.sessionStorage.clear();

  }

 public saveToken(token : string){
    window.sessionStorage.removeItem(TOK_KEY)
    window.sessionStorage.setItem(TOK_KEY, token)
    console.log(token)
 }



 public getToken() : String | null{
  if (window.sessionStorage.getItem(TOK_KEY) == null){
    return ""
  }
  else {return window.sessionStorage.getItem(TOK_KEY)}



 }


}
