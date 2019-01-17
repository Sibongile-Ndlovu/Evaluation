import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  name='';
  constructor(private myservice: MyserviceService, private _router: Router) {
    this.myservice.getName()
    .subscribe(
      data => this.name = data.toString(),
      error => this._router.navigate(['/login'])
    )

    
  }
//creating a table
const 
  ngOnInit() {
  }

}
