import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/services/data.service';
import { ApiService } from '../shared/services/api.service';
import { UserList } from '../shared/modal/data-modal'
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  success: boolean;
  isLoading: boolean;

  columnVal: string[] = ['id', 'first-name', 'last-name', 'email'];
  userListData: UserList[];
  userId: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userDataService: DataService,
    private apiService: ApiService) {
  }

  ngOnInit(): void {
    let users = this.userDataService.getUserListData();
    console.log('user list data =' , users)
    if(users && users.length > 0){
      this.userListData = users;
      this.success = true;
      this.isLoading  = false;
    } else {
      this.search();
    }
  }

  search(){
    this.isLoading = true;
    this.apiService.getUserList().subscribe((data) => {
      this.userDataService.setUserListData(data);
      this.displayCityList();
      this.success = true;
      this.isLoading = false;
    },
      err => {
        this.success = false;
        this.isLoading = false;
        console.log('err occured')
      })
  }

  displayCityList() {
    this.userListData = this.userDataService.getUserListData();
  }

  gotoUser(selectedRow) {
    const userId = selectedRow ? selectedRow.id : null;
    userId ? this.router.navigate(['/employee', userId ]) : console.log('error in user selected');
    
  }

}
