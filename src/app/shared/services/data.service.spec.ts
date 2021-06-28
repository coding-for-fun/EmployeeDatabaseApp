import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';

describe('DataService', () => {
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return getuserDetailData', () => {
    expect(service.setUserDetailData('')).toBeUndefined();
  });

  it('should return getCityOverviewData', () => {
    expect(service.getUserListData()).toEqual([]);
  });

  it('should be created', () => {
    expect(service.setUserDetailData(
      {
        "id": 1,
        "first_name": "Leanne Graham",
        "last_name": "Bret",
        "email": "Sincere@april.biz",
        "company_name": "",
        "gender": "Kulas Light",
        "preferred_color": "Apt. 556",
        "language": "Gwenborough",
        "job_title": "92998-3874",
        "phone": "1-770-736-8031 x56442",
        department:'123'
      }
    )).toBeUndefined();
    expect(service.getUserDetailData()).toEqual(
      {
        "id": 1,
        "email": "Sincere@april.biz",
        "company_name": "",
        "gender": "Kulas Light",
        "preferred_color": "Apt. 556",
        "language": "Gwenborough",
        "job_title": "92998-3874",
        department:'123'
      }
    );
  });

  it('should be created', () => {
    expect(service.setUserListData([{
      "id": 1,
      "first_name": "Leanne Graham",
      "last_name": "Bret",
      "email": "Sincere@april.biz",
      "company_name": "",
      "gender": "Kulas Light",
      "preferred_color": "Apt. 556",
      "language": "Gwenborough",
      "job_title": "92998-3874",
      "phone": "1-770-736-8031 x56442",
    }
    ]
    )).toBeUndefined();
  });
});
