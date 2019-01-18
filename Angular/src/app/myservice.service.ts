import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(private _http: HttpClient) { }

  submitRegister(body:any){
    return this._http.post('http://localhost:3000/users/register', body, {
      observe:'body'
    })
  }

  login(body:any){
    return this._http.post('http://localhost:3000/users/login', body, {
      observe:'body'
    })
  }

  getName() {
    return this._http.get('http://localhost:3000/users/name', {
      observe:'body',
      params: new HttpParams().append('token', localStorage.getItem('token'))
    })
  }

  // create a complaint 
  addComplaint(complaints) {
    var complaint = JSON.parse(complaints);
    return this._http.put(`http://localhost:3000/users/namee/${complaint["_id"]}`, complaint).subscribe(res => {
      alert(`Hey ${complaint["fullname"]} your Complaint has been successfully added...`);
      // this.currentUser = complaint["fullname"];
    });
  }
}
