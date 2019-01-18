import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-complaint',
  templateUrl: './create-complaint.component.html',
  styleUrls: ['./create-complaint.component.css']
})
export class CreateComplaintComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router) { }
  complaintForm: FormGroup;

  ngOnInit() {
  }

  onCancel(){
    this.router.navigate(['/name'])
  }

}
