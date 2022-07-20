import { Component, OnInit } from '@angular/core';
import { CurrentUserService } from '../current-user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user : object

  constructor(private currUser: CurrentUserService) {
    this.user = this.currUser.user


   }

  ngOnInit(): void {
    setTimeout(() => {console.log(this.user)} , 10000)
  }

}
