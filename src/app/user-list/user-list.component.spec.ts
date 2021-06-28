import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListComponent } from './user-list.component';
import { ApiService } from '../shared/services/api.service';
import { DataService } from '../shared/services/data.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';
import { UserList } from '../shared/modal/data-modal';

const mockDataSer = {
  setUserListData: function(d){

  },
  getUserListData: function () {
    console.log('in mock ser')
    return ([{
      "id": 1,
      "first_name": "Leanne Graham",
      "last_name": "Bret",
      "email": "Sincere@april.biz"
    }])
  }
}

const mockApiSer = {
  getUserList: function () {
    return of([{
      "id": 1,
      "first_name": "Leanne Graham",
      "last_name": "Bret",
      "email": "Sincere@april.biz"
    }])
  }
}

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [UserListComponent],
      providers: [
        { provide: DataService, useValue: mockDataSer },
        { provide: ApiService, useValue: mockApiSer },
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {   
    expect(component).toBeTruthy();
  });

  it('should display city list', () => {
    expect(component.displayCityList()).toBeUndefined();
  });

  it('should navigate', () => {
    expect(component.gotoUser({ cityName: '' })).toBeUndefined();
  });

  it('should search', () => {
    expect(component.search()).toBeUndefined();
  });
});
