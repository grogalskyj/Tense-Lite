import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  constructor(private http : HttpClient) { }
  getUsers(): Observable<any> {

    return this.http.get('http://localhost:8080/users');
    
    
    }
 storeUsers(FirstName : string, LastName : string, Email: string, token : string){
console.log('000000000000000000')
console.log(token)
console.log('000000000000000000')
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type' : 'application/json',
      Authorization : token
    })
  }
  


    var res = this.http.post('http://localhost:8080/adduser?Firstname='+FirstName+'&Lastname='+LastName+
    '&Email='+Email+"&Securityrole=Basic", "", httpOptions)
    console.log(res)

    res.subscribe(
      x => console.log('OBserved: ' + x)
    )
  }

  getUser(Email : string){
    var res = this.http.get('http://localhost:8080/getuser?email='+Email)
    return res
  }


  }
