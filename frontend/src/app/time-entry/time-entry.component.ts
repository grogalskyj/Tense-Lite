import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { CurrentUserService } from '../current-user.service';
import { TimeService } from '../time.service';
import { ProjectsComponent } from '../projects/projects.component';
import { ProjectsService } from '../projects.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-time-entry',
  templateUrl: './time-entry.component.html',
  styleUrls: ['./time-entry.component.scss']
})
export class TimeEntryComponent implements OnInit {
  userId : string
  selectedDate: string
  timeEntries: any
  htmlToAdd: string


  constructor(private datePipe : DatePipe, private currentUser : CurrentUserService, 
    private timeService : TimeService, private projectService: ProjectsService, 
    private router : Router) {
     }

  ngOnInit(): void {
    this.userId = this.currentUser.getUserId()
    this.projectService.IdtoNameMap()

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
  


dateChange(event : any){

<<<<<<< HEAD
var date = event.value.toLocaleString().substring(0,9)
=======
var date = event.value.toLocaleString().substring(0,8)
>>>>>>> 68ba6bba9c1cf7f38b6fcf47f30c5d48ec6e248c
console.log(date)
this.selectedDate= this.DateConversion(date)
this.timeService.getTime(this.selectedDate, this.userId).subscribe(res => this.timeEntries = res)


}

TitleProcess(des: string){
 return des.split(' ', 1)[0]

}

BodyProcess(des : string){
  return des.substring(des.indexOf(" ")+1)
}


AddTimeEntry(Date: string){
  return this.router.navigateByUrl('newTimeEntry?selectedDate='+Date)



}


    DeleteTimeEntry(id : string){
      var el = document.getElementById(id)
      el?.remove()
      this.timeService.deleteTime(id)


    }

EditTimeEntry(Date : string, Hours: string, Work_Description: string, id: string){
  return this.router.navigateByUrl('editTimeEntry?Date='+Date+"&Work_Description="+Work_Description+"&Hours="+Hours+"&id="+id)

}
}
