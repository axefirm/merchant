import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-forget-pin',
  templateUrl: './forget-pin.component.html',
  styleUrls: ['./forget-pin.component.scss']
})
export class ForgetPinComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private api: ApiService, private translate: TranslateService,
  ) { }

  main: FormGroup;
  ngOnInit(): void {
    this.main = this.formBuilder.group({
      useramount: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }
  forgetPin() {

  }

  changeLang() {
    console.log(this.browserLang);
    this.translate.use('mn');
  }
  browserLang(browserLang: any) {
    throw new Error('Method not implemented.');
  }
}
