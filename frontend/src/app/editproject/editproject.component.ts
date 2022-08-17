import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { stringLength } from '@firebase/util';
import { ProjectsService } from '../projects.service';


@Component({
  selector: 'app-editproject',
  templateUrl: './editproject.component.html',
  styleUrls: ['./editproject.component.scss']
})
export class EditprojectComponent implements OnInit {
  OName : string
  SDate: string
  EDate : string 
  Billable: string


  constructor(public route : ActivatedRoute, private projectService : ProjectsService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      console.log(params)
      this.OName = params['Name'];
      this.SDate = params['SDate'];
      this.EDate = params['EDate'];
      this.Billable = params['Billable']
      console.log(this.OName)
    })
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
  

  EditProject( Oldname: string,  Name : string, SDate: string, EDate : string, Billable: string  ){
    SDate = this.DateConversion(SDate)
    EDate = this.DateConversion(EDate)
    return this.projectService.EditProject(Oldname, Name, SDate, EDate, Billable)
  }

      
      
      
      
      
  }

