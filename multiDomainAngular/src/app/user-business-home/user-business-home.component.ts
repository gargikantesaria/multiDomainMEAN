import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiCallService } from '../api-call.service';

@Component({
  selector: 'app-user-business-home',
  templateUrl: './user-business-home.component.html',
  styleUrls: ['./user-business-home.component.scss']
})
export class UserBusinessHomeComponent implements OnInit {

  private userId; 
  private userData;
  constructor(public router: Router, private route: ActivatedRoute, public apiService: ApiCallService) { }

  ngOnInit() {
    this.route.params.forEach((data) => {
      console.log(data);
      this.userId =  data.userId
    });
    this.apiService.getUserBusinessData(this.userId).then((res:any) => {
      console.log("Business data response is", res);
      this.userData = res.data;
    }).catch((err) => {
      console.log("Error is", err);
    })
  }

}
