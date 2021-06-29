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
  noData: boolean;

  columnVal: string[] = ['id', 'first-name', 'last-name', 'email'];
  userListData: UserList[];
  userId: number;

  inputFields = {
    empId: undefined,
    firstName: '',
    lastName: '',
    email: ''
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userDataService: DataService,
    private apiService: ApiService) {
  }

  ngOnInit(): void {
    let inputFields = this.userDataService.getInputFields();
    let users = this.userDataService.getUserListData();
    console.log('user list data =', users)
    if (inputFields && users && users.length > 0) {
      this.userListData = users;
      this.success = true;
      this.isLoading = false;
      this.inputFields = inputFields;
    } 
  }

  search() {
    this.isLoading = true;
    this.noData = false;
    this.userDataService.clearUserListData();
    this.userDataService.setInputFields(this.inputFields);
    this.apiService.getUserList(this.inputFields).subscribe((data) => {
      this.userDataService.setUserListData(data);
      this.displayUserList();
      this.success = true;
      this.isLoading = false;
    },
      err => {
        this.success = false;
        this.isLoading = false;
        console.log('err occured')
      })
  }

  displayUserList() {
    this.userListData = this.userDataService.getUserListData();
    if(this.userListData.length<=0){
      this.noData = true;
    }
  }

  gotoUser(selectedRow) {
    const userId = selectedRow ? selectedRow.id : null;
    userId ? this.router.navigate(['/employee', userId]) : console.log('error in user selected');

  }

}
