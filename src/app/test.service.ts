import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestService implements HttpInterceptor{

  intercept(req, res){
    return res.handle(req);
    }
}