import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AssignmentService {

  constructor(private http : HttpClient) { }



  getUserAssignments(user_id: number){
    console.log(user_id)
    var res = this.http.get("http://localhost:8080/assignmentsbyId?id="+user_id)
    res.subscribe(x => console.log(x))
    return res

  }


  getInactiveUserAssignments(user_id: number){
    console.log(user_id)
    var res = this.http.get("http://localhost:8080/InactiveassignmentsbyId?id="+user_id)
    res.subscribe(x => console.log(x))
    return res

  }


  deactivateAssignment(assignid : number, projId : number ){
    console.log('hip hip....')
    var res = this.http.patch("http://localhost:8080/deactivateAssignment?assignid="+assignid+"&projId="+projId, "")
    res.subscribe(x => console.log(x))
    return res


  }

  addAssignment(projectId : number, userId: number, rate: string){
    var res = this.http.post("http://localhost:8080/newAssignment?projectId="+projectId+"&userId="+userId+"&rate="+rate, "")
    res.subscribe(x => console.log(x))
    return res
  }

}
