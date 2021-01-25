import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SharedService } from './core/services/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'iBank';
  isLogin: boolean;
  browserLang: string = localStorage.getItem('lang') ? localStorage.getItem('lang') : 'mn';
  constructor(private translate: TranslateService, private sharedService: SharedService) {
    translate.setDefaultLang(this.browserLang);
    this.sharedService.onMainEvent.subscribe(
      (isLogin) => {
        this.isLogin = isLogin;
      }
    );
  }
  ngOnInit() {
    this.isLogin = false;
  }
}
