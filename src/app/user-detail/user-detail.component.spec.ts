import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UserDetailComponent } from './user-detail.component';
import { ApiService } from '../shared/services/api.service';
import { DataService } from '../shared/services/data.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { of } from 'rxjs';

const mockSer = {
  getUserDetail: function(){
    return of([{id:123, first_name:'1231231', last_name: '1231324', email: 'London'}]);
  },
}

const mockDataSer = {
  getUserDetail: function(){
    return[{id:123, first_name:'1231231', last_name: '1231324', email: 'London'}]
  }
}

const mockroute = {
  paramMap: function(){
    of({p:{params:'id'}})
  }
}

describe('CityComponent', () => {
  let component: UserDetailComponent;
  let fixture: ComponentFixture<UserDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [ UserDetailComponent ],
      providers: [
        { provide: ApiService, useValue: mockSer },
        { DataService, useValue: mockDataSer },
        { ActivatedRoute, useValue: mockroute },
      ],
      schemas: [ NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should displayCityDetail', () => {
    expect(component.displayUserDetail()).toBeUndefined();
  });
});
