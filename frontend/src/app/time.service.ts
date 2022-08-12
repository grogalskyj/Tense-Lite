import { getLocaleTimeFormat } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TimeFormComponent } from './time-form/time-form.component';
@Injectable({
  providedIn: 'root'
})
export class TimeService {

  constructor(private http : HttpClient) {}



    getTime(Date : string, UserId: string){

      return this.http.get("http://localhost:8080/time/getTime?Date="+Date+"&UserId="+UserId)
   }


   addTime(Date: String, 
    Project : string, 
    Work_Description: String, 
    NumHours: number,
    UserId: string): String{
      var res =this.http.post("http://localhost:8080/time/addTimeEntry?Date="+Date+"&Project="+Project+"&Work_Description="+Work_Description+"&NumHours="+NumHours+"&UserId="+UserId, "")
      res.subscribe(r => console.log(r))
    return "Post Completed"
    
    }



    deleteTime(id : string){
      console.log('hip hip hooray')
      var res = this.http.delete("http://localhost:8080/time/deleteTime?id="+id)
      res.subscribe(x => console.log(x))
    }



    EditTime(Date: string, Hours : string, Work_Description: string, id : string, projId : string){
      console.log(Hours)
      var query_str = "date="+Date+"&Hours="+Hours+"&Work_Description="+Work_Description+"&id="+id+"&projId="+projId
      var res = this.http.put("http://localhost:8080/time/editTime?"+query_str, "")
      res.subscribe(x => console.log(x))





    }

}
