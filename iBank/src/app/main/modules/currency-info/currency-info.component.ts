import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-currency-info',
  templateUrl: './currency-info.component.html',
  styleUrls: ['./currency-info.component.scss'],
})
export class CurrencyInfoComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private translate: TranslateService
  ) {
    translate.setDefaultLang('en');
  }

  @Input() visibleChat: boolean = false;
  main: FormGroup;
  isMoreRates = false;

  rateUSD = {
    name: 'USD',
    increased: false,
    buy: 2566,
    sell: 2564,
  };
  rateACO = {
    name: 'ACO',
    increased: true,
    buy: 1566,
    sell: 1300,
  };
  rateGAN = {
    name: 'GAN',
    increased: true,
    buy: 156000,
    sell: 155999,
  }
  rateN1 = {
    name: "N1",
    increased: true,
    buy: 1234,
    sell: 4321,
  }
  rateN2 = {
    name: "N2",
    increased: false,
    buy: 200,
    sell: 199,
  }

  rates = [
    this.rateUSD,
    this.rateACO,
    this.rateGAN,
    this.rateN1,
    // this.rateN2,
  ];

  ngOnInit(): void {
    this.main = this.formBuilder.group({
      useramount: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }
  // Хэл солих
  changeLang(lang: string) {
    this.translate.use(lang);

    location.replace(window.location.href);
    // window.location.href = window.location.href
  }

  isIncreased(data) {
    return data.increased;
  }

  moreRates() {
    this.isMoreRates = true;
  }
  lessRates() {
    this.isMoreRates = false;
  }
}
