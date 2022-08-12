import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { CurrentUserService } from '../current-user.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  people : any 
  displayedColumns = ['Last Name', 'First Name', 'Email', 'Role', 'ViewProfile']
  isAdmin : Boolean


  //{id_Users: 1, lastName: 'Rogalskyj', email: 'grogalskyj@jahnelgroup.com', enabled: 'basic', first_Name: 'George'}
  constructor(private userService: UserService, private currentUser: CurrentUserService, private router : Router) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(res => this.people = res)
    this.isAdmin = this.currentUser.getUserRole() == "Admin"
    var edits =  document.getElementsByClassName("editButton") as HTMLCollectionOf<HTMLElement>

  }



  UpgradeAdmin(Email :string){
    if (confirm("Are You sure you want to Upgrade" + Email+ " to Admin?")){
      this.userService.updateUserRole(Email)
    }


  }
 ViewProfile(userEmail : string){
    this.userService.getUser(userEmail).subscribe(res => this.router.navigate(['/profile', JSON.parse(JSON.stringify(res)).id_Users ,JSON.parse(JSON.stringify(res)).lastName, JSON.parse(JSON.stringify(res)).first_Name, JSON.parse(JSON.stringify(res)).email, JSON.parse(JSON.stringify(res)).enabled]))
  }
  





}