import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-currency-info',
  templateUrl: './currency-info.component.html',
  styleUrls: ['./currency-info.component.scss']
})

export class CurrencyInfoComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private translate: TranslateService) {
    translate.setDefaultLang('en');
}

  main: FormGroup;

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

}
