import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/http.service';
import { MgLoginReq } from '../model/login';
import { MgCredForgetReq  } from '../model/forgetPin';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private api: HttpService) { }

  login(data: MgLoginReq) {
      return this.api.post('login', data);
      
  }

  forgetPin(data: MgCredForgetReq) {
    return this.api.post('forgetPin', data);
  }

}

