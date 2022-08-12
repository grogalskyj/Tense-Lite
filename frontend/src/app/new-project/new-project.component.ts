import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router';
import { ProjectsService } from '../projects.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.scss']
})
export class NewProjectComponent implements OnInit {

  constructor(private projectService : ProjectsService, private router: Router) { }

  ngOnInit(): void {
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


async CreateProject(Name : string, SDate :string, EDate : string, Billable :string) {
  console.log(SDate, EDate)
  SDate = this.DateConversion(SDate)
  EDate = this.DateConversion(EDate)
  console.log(EDate)
  this.projectService.addNewProject(Name, SDate, EDate, Billable)
  this.router.navigate(['/projects'])



}





}
