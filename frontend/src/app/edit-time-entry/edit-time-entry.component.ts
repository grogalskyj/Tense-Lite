import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AssignmentService } from '../assignment.service';
import { CurrentUserService } from '../current-user.service';
import { ProjectsService } from '../projects.service';
import { TimeService } from '../time.service';

@Component({
  selector: 'app-edit-time-entry',
  templateUrl: './edit-time-entry.component.html',
  styleUrls: ['./edit-time-entry.component.scss']
})
export class EditTimeEntryComponent implements OnInit {
  Date: string
  Work_Description: string
  NumHours: string
  Project : string
  id : string
  assignedProjects : any


  constructor( public route : ActivatedRoute, private timeService: TimeService, private projectService: ProjectsService,
    private assignmentService: AssignmentService, private currentUser: CurrentUserService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
    this.Date = params['Date'];
    this.Work_Description = this.BodyProcess(params['Work_Description']);
    this.NumHours = params['Hours'];
    this.Project = this.TitleProcess(params['Work_Description']);
    this.id = params['id']
    this.assignmentService.getUserAssignments(Number(this.currentUser.getUserId())).subscribe(res => this.assignedProjects = res)
    })

  }


  TitleProcess(des: string){
    return des.split(' ', 1)[0]
   
   }
   
   BodyProcess(des : string){
     return des.substring(des.indexOf(" ")+1)
   }
   
   

  DateConversion(date : string) : string{
    var date_array = date.split('/')
    if (date_array[0].length == 1){
      date_array[0]= '0'+date_array[0]
    }
    if (date_array[1].length == 1){
      date_array[1] = '0' + date_array[1]
    }
  
  
    return date_array[2]+'-'+date_array[0]+'-'+date_array[1]
  }
  


   EditTime(Date : string, Work_Description : string, projId : string, numhours: string, timeId : string){
    Date = this.DateConversion(Date)
    return this.timeService.EditTime(Date, numhours, Work_Description, timeId, projId)
   }

}
