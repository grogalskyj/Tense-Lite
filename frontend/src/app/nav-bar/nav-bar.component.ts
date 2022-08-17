import { Component, OnInit } from '@angular/core';
import { stringLength } from '@firebase/util';
import { first } from 'rxjs';
import { CurrentUserService } from '../current-user.service';
import { Router } from '@angular/router';
import { TokenStorageService } from '../token-storage.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  final_string = ""
  header_name =""
  constructor(private currentuserservice : CurrentUserService, private router : Router, private tokservice : TokenStorageService) {
   }

  ngOnInit(): void {
     var firstname = this.currentuserservice.getUserFirstName()
     var lastname =  this.currentuserservice.getUserLastName()
      
     this.final_string =  firstname.concat( " ", lastname)
     this.header_name = "Tense (A Lite Affair)"
    }

    SignOut(){
      this.currentuserservice.signOut()
      this.tokservice.signOut()
      this.router.navigateByUrl('sign-in')

    }

    ToProfile(){
      this.router.navigate(['/profile', this.currentuserservice.getUserId(),
    this.currentuserservice.getUserLastName(), this.currentuserservice.getUserFirstName(),
  this.currentuserservice.getUserEmail(), this.currentuserservice.getUserRole() ])


    }
    


  
  }


