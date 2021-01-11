import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { trigger, transition, style, animate, state, animation, keyframes } from '@angular/animations'
import { ApiService } from 'src/app/core/services/api.service';
import { HttpClient } from '@angular/common/http';
import { MgLoginReq, MgLoginRes } from 'src/app/core/model/login';

interface Carousel {
  title: string;
  description: string;
}

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  animations: [
    trigger('myAnimation', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', animate('600ms ease-in', keyframes([
        style({ opacity: 0, offset: 0 }),
        style({ opacity: 1, offset: 1.0 })
      ])))
    ]),
  ]
})
export class WelcomeComponent implements OnInit {

  // browserLang: string = sessionStorage.getItem('lang') ? sessionStorage.getItem('lang') : 'mn';
  constructor(private formBuilder: FormBuilder, private api: ApiService, protected http: HttpClient) { }
  indicator = 0;
  carouselInterval;
  maxIndex = 3;
  main: FormGroup;
  carousels: Carousel[] = [
    {
      title: "iBanking platform1",
      description: "All-In-One solution, bringing a full suite of financial services to your fingertips.",
    },
    {
      title: "iBanking platform2",
      description: "All-In-One solution, bringing a full suite of financial services to your fingertips.",
    },
    {
      title: "iBanking platform3",
      description: "All-In-One solution, bringing a full suite of financial services to your fingertips.",
    }
  ];

  ngOnInit(): void {
    this.main = this.formBuilder.group({
      useramount: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
    this.intervalRequest();
  }
  intervalRequest() {
    clearInterval(this.carouselInterval);
    this.carouselInterval = setInterval(() => {
      this.next(this.indicator + 1);
    }, 6000);
  }
  next(input: number) {
    this.intervalRequest();
    if (input < this.maxIndex) {
      this.indicator = input;
    } else {
      this.indicator = 0;
    }
  }
  login() {
    const loginData = new MgLoginReq("99082605", "XKXvK4AmzUNDRSQiTHKsAac7OkVQcYtdeI6xBqiZcyDDX0dCaL+UzIT3GAnSjAV1SZpJJfH8CBp3Ajf6GG/4ak/vZnOU5Kfz4vCm3MhnmZss3zgkBIBW0ydBK7gEgcUIMZyrZHJwA9EeXC3PZAEBWnNaQODyxw470baTg9flOEhF/bbTUKQ9UIyjtWGVON8t13S75FXDBFfti/tjSDlsyhO+t9KmcgyYET1SZyI8XWuRv/r1slbfk3EoihbxoaIbIdLgrOfNMPvA4Z3qFNgtrAQ6/Mikg2YGx4L7dZ7P7Xpi7D9SLKMcqNhhw0DZLzq4VfmZZbTbWO0+C7mBHoCajA==", "6EB20E499328", "MNGC-MPS92", "172.16.116.92"
      , "6EB20E499328", "WEB", "Name = Chrome,Type = Chrome87,Version = 87.0,Major", "Name = Chrome,Type = Chrome87,Version = 87.0,Major", 1, "MN", 0, 0, "", "2021010817121800", 0, 0, 0, "");
    this.api.login(loginData).subscribe(data => {
      console.log(data);
    })
  }
  ngOnDestroy(): void {
    clearInterval(this.carouselInterval);
  }
}
