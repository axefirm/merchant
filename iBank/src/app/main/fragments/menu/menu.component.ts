import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Pages } from 'src/app/core/model/const';
import { MgCmerchCheckUnreadSmartReq } from 'src/app/core/model/enquire/checkUnreadSmart';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Output() changeIndex = new EventEmitter<number>();
  readonly Pages = Pages;
  index = 1;
  
  constructor(
    private api: ApiService
  ) { }

  unread = false;

  ngOnInit(): void {
    this.api.checkUnreadSmart(new MgCmerchCheckUnreadSmartReq(sessionStorage.getItem("merchCustId"))).subscribe((data) => {
      if(data.responseCode == 0){
        this.unread = data.unread;
      }else{
        alert(data.responseDesc);
      }
    })
  }
  next(input: number) {
   this.index = input;
   this.changeIndex.emit(input);
  }
}
