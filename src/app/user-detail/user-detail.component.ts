import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/services/data.service';
import { ApiService } from '../shared/services/api.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { UserDetail } from '../shared/modal/data-modal';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  success: boolean;
  isLoading: boolean;
  userDetailData: UserDetail[] = [];
  userId: string;
  columnVal: string[] = ['job_title', 'department', 'company_name','language', 'gender', 'preferred_color'];

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private apiService: ApiService
  ) {
    this.route.paramMap.subscribe((p) => {
      this.userId = p['params']['id'];
      this.isLoading = true;
      this.apiService.getUserDetail(this.userId).subscribe(
        (data) => {
          this.dataService.setUserDetailData(data);
          this.displayUserDetail();
          this.success = true;
          this.isLoading = false;
        }, err => {
          this.success = false;
          this.isLoading = false;
          console.log('err occured')
        })
    });

  }

  ngOnInit(): void {
  }

  displayUserDetail() {
    let userData = this.dataService.getUserDetailData();
    (userData && userData.id) ? this.userDetailData.push(userData) : this.userDetailData=[]; 
  }

}
