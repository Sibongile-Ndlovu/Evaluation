import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { CreateComplaintComponent } from '../create-complaint/create-complaint.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  name='';

 
  constructor(private myservice: MyserviceService, private _router: Router, private dialog: MatDialog) {
    // this.myservice.getName()
    // .subscribe(
    //   data => this.name = data.toString(),
    //   error => this._router.navigate(['/login'])
    //)


  }

  ngOnInit() {
  }

  openDialog() {
    this.dialog.open(CreateComplaintComponent)
  }

}
