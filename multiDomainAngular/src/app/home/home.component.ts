import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { ApiCallService } from '../api-call.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  businessDetailForm:FormGroup;

  constructor(public apiService: ApiCallService, public router: Router) { }

  ngOnInit() {
    this.businessDetailForm =  new FormGroup({
      'userEmail' : new FormControl(null, [Validators.required]),
      'userBusinessName': new FormControl(null, [Validators.required])
    })
  }

  onSubmitForm(){
    let requestData = {
      'userEmail' : this.businessDetailForm.controls['userEmail'].value,
      'userBusinessName': this.businessDetailForm.controls['userBusinessName'].value
    }
    console.log("request data is", requestData);
    this.apiService.userBusinessUrl(requestData).then((data:any) => {
      console.log("Response data", data);
      this.router.navigate([`/user/${data.data._id}`])
    }).catch(err => {
      console.log("error data", err)
    })
  }

}
