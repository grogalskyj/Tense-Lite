import { Component, OnInit, ViewChild } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { ProjectsService } from '../projects.service';
import { CurrentUserService } from '../current-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: any
  admin : boolean

  constructor(private http: HttpClient, private projectService: ProjectsService, 
    private currentUser: CurrentUserService, private router : Router) {
   }

   

  ngOnInit(): void {
  this.projectService.getProjects().subscribe(
      x => this.projects = x
    )

  this.admin = this.currentUser.getUserRole() == "Admin"
  console.log(this.currentUser.getUserRole())
  console.log(this.admin)

  }


MakeNewProject(){
  this.router.navigate(['project/newProject'])
}


DeleteProject(Name : string){
  console.log(Name)
  this.projectService.DeleteProject(Name)
  var el = document.getElementById(Name)
  console.log(el)
  el?.remove()

  
}

EditProject(Name : String, SDate: String , EDate: String, billable: string){
  return this.router.navigateByUrl('editProject?Name='+Name+"&SDate="+SDate+"&EDate="+EDate+"&Billable="+billable)
}

    

  }


