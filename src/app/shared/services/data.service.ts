import { Injectable } from '@angular/core';
import { UserDetail, UserList } from '../modal/data-modal';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  userListData: UserList[] = [];
  userDetailData: UserDetail;
  inputFields;

  constructor() { }

  setUserListData(data) {
    for (let i = 0; i < data.length; i++) {
      let userListObj: any = {};
      userListObj.first_name = data[i].first_name;
      userListObj.last_name = data[i].last_name;
      userListObj.email = data[i].email;
      userListObj.id = data[i].id;
      this.userListData.push(userListObj);
    };
  }

  setUserDetailData(userDetail) {
    this.userDetailData = {
      id: userDetail.id,
      job_title: userDetail.job_title,
      department: userDetail.department,
      language: userDetail.language,
      email: userDetail.email,
      company_name: userDetail.company_name,
      gender: userDetail.gender,
      preferred_color: userDetail.preferred_color
    }
  }

  setInputFields(fields){
    this.inputFields = fields;
  }

  clearUserListData(){
    this.userListData = [];
  }

  getUserListData() {
    return this.userListData;
  }

  getUserDetailData() {
    return this.userDetailData;
  }

  getInputFields(){
    return this.inputFields;
  }
}
