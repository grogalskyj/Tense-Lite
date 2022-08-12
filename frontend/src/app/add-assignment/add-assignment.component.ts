import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AssignmentService } from '../assignment.service';
import { ProjectsService } from '../projects.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-add-assignment',
  templateUrl: './add-assignment.component.html',
  styleUrls: ['./add-assignment.component.scss']
})
export class AddAssignmentComponent implements OnInit {
  currentProjects : any
  allProjects: any
  selectedOption: string
  user_id : number



  constructor(public route: ActivatedRoute, private projectService: ProjectsService,
    private assignmentService: AssignmentService, private location : Location) { }

  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {
      this.currentProjects = this.transform( params['currentProjects']);
      this.user_id = params['userId']
      this.projectService.getProjects().subscribe(res => this.allProjects = res)


    })

  }


  click(){
    console.log(this.allProjects)
  }

  transform(projects : string) : Number[]{
   let project_array = projects.split(',')
   var return_array = []
   for (var proj of project_array){
    return_array.push( +proj)
   }
   return return_array
  }


MakeAssignment(projectId: number, rate : string){
  return this.assignmentService.addAssignment(projectId, this.user_id, rate)

}


backClicked(){
  this.location.back();
}


AddProject(projectId: number, rate: string){
  this.backClicked()
  return this.MakeAssignment(projectId, rate)
}

}
