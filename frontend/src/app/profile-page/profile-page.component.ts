import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AssignmentService } from '../assignment.service';
import { CurrentUserService } from '../current-user.service';
import { ProjectsService } from '../projects.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {
  user_id : number | null
  LName : string | null
  FName : string | null
  Email : string | null
  Role : string | null
  Current_Assignments : any
  Past_Assignments: any
  project_name : any
  isAdmin: Boolean
  projectMap : any 
  constructor(public route : ActivatedRoute, 
    private userService : UserService, 
    private currentUser: CurrentUserService,
    private  assignmentService : AssignmentService,
    private projectService : ProjectsService,
     private router : Router) {

   }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.user_id = Number(params.get('id'));
      this.LName = params.get('Lname');
      this.FName = params.get('FName');
      this.Email = params.get('Email');
      this.Role = params.get('Role');
      console.log(this.user_id)
      this.assignmentService.getUserAssignments(this.user_id).subscribe(res => this.Current_Assignments = res)
      this.assignmentService.getInactiveUserAssignments(this.user_id).subscribe(res => this.Past_Assignments = JSON.parse(JSON.stringify(res)) )
      this.isAdmin = this.currentUser.getUserRole() == "Admin"
      this.projectService.IdtoNameMap()
      this.projectMap = this.projectService.getProjectMap()
    

    })
  }

  show(){

    console.log(this.Current_Assignments)
  }



Namify(id : Number){
  var res = this.projectService.getProject(id.toString()).subscribe(event => this.project_name = event)

}

Deactivate_Assignment(assignId : number, projId : number){
  console.log('hip')

  return this.assignmentService.deactivateAssignment(assignId, projId)
}


addAssignment(){
  var current_project_list = []
  for( var el of this.Current_Assignments){
    current_project_list.push(el.projectId)
  }
  return this.router.navigateByUrl("/addAssignment?currentProjects="+current_project_list+"&userId="+this.user_id)
}


ConvertProjectId(id : number){

  return this.projectMap.get(id)


}

}
