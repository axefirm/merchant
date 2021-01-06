import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { trigger, transition, style, animate, state, animation,keyframes } from '@angular/animations'
import { TranslateService } from '@ngx-translate/core';
import { Pages } from 'src/app/core/model/const';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
}) 

export class HomeComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private translate: TranslateService) {
    translate.setDefaultLang('en');
}

  readonly Pages = Pages;
  index: number;
  title = "Current";
  main: FormGroup;
  ngOnInit(): void {
    this.index = Pages.current;
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
    
  changeIndex(val: number) {
    this.index = val;
    console.log(val);
  }

}
