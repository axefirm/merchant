import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { MgLoginRes } from 'src/app/core/model/login';
import { MgCmerchMerchCust } from 'src/app/core/model/payment/selectMerchCus';
import { ApiService } from 'src/app/core/services/api.service';
import { EncrService } from 'src/app/core/services/enc.service';
import { SharedService } from 'src/app/core/services/shared.service';

interface Carousel {
  title: string;
  description: string;
}

@Component({
  selector: 'app-welcome-section',
  templateUrl: './welcome-section.component.html',
  styleUrls: ['./welcome-section.component.scss'],
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
export class WelcomeSectionComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private api: ApiService, protected http: HttpClient,
    private encr: EncrService, private translate: TranslateService,
    private router: Router, private service: SharedService, public dialog: MatDialog,
    private route: ActivatedRoute,) { }

  //Carousal related
  indicator = 0;
  carouselInterval;
  maxIndex = 3;

  page = 0;

  main: FormGroup;
  loginRes: MgLoginRes;

  test = false;

  selectRes: MgCmerchMerchCust[];
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

  ngOnDestroy(): void {
    clearInterval(this.carouselInterval);
  }
}
