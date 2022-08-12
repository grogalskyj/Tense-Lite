import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { stringLength } from '@firebase/util';
import { AssignmentService } from '../assignment.service';
import { CurrentUserService } from '../current-user.service';
import { ProjectsService } from '../projects.service';
import { TimeService } from '../time.service';

@Component({
  selector: 'app-time-form',
  templateUrl: './time-form.component.html',
  styleUrls: ['./time-form.component.scss']
})
export class TimeFormComponent implements OnInit {
  Date: string
  assignedProjects: any
  user : string
  projectMap : any

  constructor(public route: ActivatedRoute, private timeService: TimeService,
    private projectService: ProjectsService, private currentUser: CurrentUserService, 
    private assignmentService: AssignmentService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params =>
    {
      this.user = this.currentUser.getUserId()
      this.Date = params['selectedDate']
      console.log(this.Date)
     this.assignmentService.getUserAssignments(Number(this.user)).subscribe(res => this.assignedProjects = res)
     this.projectService.IdtoNameMap()
     this.projectMap = this.projectService.getProjectMap()})
  }

     SubmitTimeEntry(UserId : string, Date : string, Project: string, Hours : string, Work_Description: string ){

      var res = this.timeService.addTime(Date, Project, Work_Description, Number(Hours), UserId)
      if (res == "Time Entry Saved"){
        console.log('render')

      }



    }

    ConvertProjectId(id : number){

      return this.projectMap.get(id)


    }


  }
  

