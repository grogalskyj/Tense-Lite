import { Injectable } from '@angular/core';


const CURR_ID_USER = 'UserId'
const CURR_LAST_NAME  = 'LastName'
const CURR_EMAIL = 'Email'
const CURR_ENABLED = 'Enabled'
const CURR_FIRST_NAME = 'FirstName'



@Injectable({
  providedIn: 'root'
})
export class CurrentUserService {

  constructor(){}



  signOut(){
    window.sessionStorage.clear();
  }


  saveUser(IdUser: Number, LastName : string, FirstName: string, Enabled : string, 
    Email : string){

      window.sessionStorage.removeItem(CURR_EMAIL)
      window.sessionStorage.setItem(CURR_EMAIL, Email)
      window.sessionStorage.removeItem(CURR_ID_USER)
      window.sessionStorage.setItem(CURR_ID_USER, IdUser.toString())
      window.sessionStorage.removeItem(CURR_ENABLED)
      window.sessionStorage.setItem(CURR_ENABLED, Enabled)
      window.sessionStorage.removeItem(CURR_FIRST_NAME)
      window.sessionStorage.setItem(CURR_FIRST_NAME, FirstName)
      window.sessionStorage.removeItem(CURR_LAST_NAME)
      window.sessionStorage.setItem(CURR_LAST_NAME, LastName)

      console.log(window.sessionStorage[CURR_EMAIL])
      console.log(window.sessionStorage[CURR_ENABLED])
      console.log(window.sessionStorage[CURR_FIRST_NAME])

    }

  getUserId(){
    var get_val = window.sessionStorage.getItem(CURR_ID_USER)
    if (get_val == null){
      return ""
    }
    else{
      return get_val
    }
  }

  getUserEmail(){
    var get_val = window.sessionStorage.getItem(CURR_EMAIL)
    if (get_val == null){
      return ""
    }
    else{
      return get_val
    }
  }

  getUserFirstName(){
    var get_val = window.sessionStorage.getItem(CURR_FIRST_NAME)
    if (get_val == null){
      return ""
    }
    else{

    return get_val
    }
  }

  getUserLastName(){
    var get_val =  window.sessionStorage.getItem(CURR_LAST_NAME)
    if(get_val == null){
      return ""
    }
    else{
      return get_val
    }
  }

  getUserRole(){
    var get_val = window.sessionStorage.getItem(CURR_ENABLED)
    if (get_val == null){
      return ""
    }
    else{
      return get_val
    }
  }


}
