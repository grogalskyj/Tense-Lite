import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';
import { HttpHeaders } from '@angular/common/http';

const CURR_PROJECTS : any = "wow"
var IdtoName = new Map<number, string>

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private http: HttpClient,private tokService: TokenStorageService) { }

 IdtoNameMap(){

  var projects = this.getProjects().subscribe(res => { for(var item of res){
    var projectId = Number(item["projectId"])
    var projectName = item["project_name"]
    IdtoName.set(projectId, projectName )
  }
  } )

  }

  getProjectMap(){
    return IdtoName
  }



getProjects() : Observable<any>{

  return this.http.get("http://localhost:8080/projects/ProjectEntries")


}


addNewProject(Name : String, SDate: String, EDate : String, Billable : String) : Observable<any>{

  var query_str = "Name="+Name+"&Start_Date="+SDate+"&End_Date="+EDate+"&billable="+Billable
  console.log(query_str)

  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type' : 'application/json',
      'Authorization' : "",
      "User-Agent" : "test"
    })

  }
  var res= this.http.post("http://localhost:8080/projects/addProject?"+query_str, httpOptions)
  res.subscribe(x => console.log(x))
  return res


}


DeleteProject(Name : String){
  var res = this.http.delete("http://localhost:8080/projects/deleteProject?Name="+Name)
  res.subscribe(result => console.log(res))
}


EditProject(oldName : String, newName : String, SDate: String, EDate: String, Billable: String){
  var query_str = "oldName="+oldName+"&newName="+newName+"&newSDate="+SDate+"&newEDate="+EDate+"&newBillable="+Billable
  var res= this.http.put("http://localhost:8080/projects/editProject?"+query_str, "")
  res.subscribe(result => console.log(res))

}

getProject(id : string){
  return this.http.get("http://localhost:8080/projects/getProjectName?id="+id)

}

getProjectbyName(name : string){
  return this.http.get("http://localhost:8080/projects/getProject?Name="+name)
}


}
