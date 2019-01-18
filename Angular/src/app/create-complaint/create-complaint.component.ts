import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Router, ActivatedRoute } from '@angular/router';
//import { ComplaintModel } from '../models/complaint.model';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-create-complaint',
  templateUrl: './create-complaint.component.html',
  styleUrls: ['./create-complaint.component.css']
})
export class CreateComplaintComponent implements OnInit {

  currentUser: any = [];
  tempArr: any = [];

  constructor(private formBuilder: FormBuilder, private _myservice: MyserviceService, private _router: Router, private _activatedRoute: ActivatedRoute) {
    this._activatedRoute.params.subscribe( params => console.log(params))
   }
  complaintForm: FormGroup;
    

  ngOnInit() {
    //get current user from database
    this.currentUser = localStorage.getItem('result');
    this._activatedRoute.params.subscribe( params => console.log(params));
}

onCancel(){
  this._router.navigate(['/name']);
}

onAddComplaint(complaint) {

  this.currentUser = JSON.parse(this.currentUser);

  // store data from local storage json to work with
  //this.currentUser.grouplist = this.currentUser["grouplist"];
  //this.currentUser.dateCreated = this.currentUser["dateCreated"];
  //this.currentUser.name = this.currentUser["name"];
  //this.currentUser.email = this.currentUser["email"];
  //this.currentUser.phone = this.currentUser["phone"];
  this.currentUser.complaint = this.currentUser["complaint"];
  // push the current complaint in the temporary variable
  this.tempArr = {
    "heading": complaint["heading"],
    "description": complaint["description"],
    //"status": complaint["status"],
    "complaintDate": new Date(Date.now()).toISOString(),

  };

  // push the current complaint in the currentUser variable
  this.currentUser.complaint.push(this.tempArr);

  console.log(this.currentUser, " Updated complaints array...");

  this.currentUser.complaint.heading = complaint.heading;
  this.currentUser.complaint.description = complaint.description;
  console.log(this.currentUser.complaint, " new complaint added...");
  console.log(this.currentUser, " updated current user");

  console.log(this.currentUser);

  localStorage.setItem('result', JSON.stringify(this.currentUser));
  this.currentUser = localStorage.getItem('result');
  console.log(this.currentUser, " done...");
  
  this.addComplaint(this.currentUser);
}
addComplaint(currentU) {
  this._myservice.addComplaint(currentU);
  this._router.navigate(['/name']);
}


}
