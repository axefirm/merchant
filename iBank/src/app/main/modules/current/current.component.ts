import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexStroke,
  ApexTooltip,
  ApexXAxis,
  ChartComponent,
} from 'ng-apexcharts';
import {
  MgCmerchInqAcntData,
  MgCmerchInqAcntListReq,
  MgCmerchInqAcntListRes,
} from 'src/app/core/model/enquire/getMerchAcntList';
import { MgCmerchInqAcntTranRefData } from 'src/app/core/model/enquire/getTranRefReport';
import { ApiService } from 'src/app/core/services/api.service';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { Router } from '@angular/router';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
};

export interface Transaction {
  amount: string;
  bankName: string;
  correspondentName: string;
  accountNo: string;
  description: string;
  date: string;
}

const ELEMENT_DATA1: Transaction[] = [
  {
    bankName: 'XacBank',
    amount: '6000',
    correspondentName: 'Enkhbayar',
    accountNo: '5000611662',
    date: '10 Feb 2020',
    description: 'Vodka',
  },
  {
    bankName: 'XacBank',
    amount: '6000',
    correspondentName: 'Enkhbayar',
    accountNo: '5000611662',
    date: '10 Feb 2020',
    description: 'Vodka',
  },
  {
    bankName: 'XacBank',
    amount: '6000',
    correspondentName: 'Enkhbayar',
    accountNo: '5000611662',
    date: '10 Feb 2020',
    description: 'Vodka',
  },
  {
    bankName: 'XacBank',
    amount: '6000',
    correspondentName: 'Enkhbayar',
    accountNo: '5000611662',
    date: '10 Feb 2020',
    description: 'Vodka',
  },
];

@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.scss'],
  animations: [
    trigger('fadeIn', [
      state('true', style({opacity: '1'})),
      state('false', style({ opacity: '0.3'})),
      transition('0 <=> 1', animate('300ms ease'))
    ]),
  ]
})
export class CurrentComponent implements OnInit {
  @ViewChild('chart') chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  displayedColumns: string[] = [];
  displayedColumnsHide: string[] = [
    'bankamount',
    'amount',
    'acntNo',
    'date',
    'symbol',
  ];
  displayedColumnsNotHide: string[] = ['bankamount', 'amount', 'symbol'];
  dataSourceq = ELEMENT_DATA1;
  isHide = true;
  test = true;
  chosenCard = 0;

  // related account
  accountRes: MgCmerchInqAcntData[];
  transactionRes: MgCmerchInqAcntTranRefData[];

  constructor(
    private changeDetectorRefs: ChangeDetectorRef,
    private api: ApiService,
    private router: Router
  ) {
    this.chartOptions = {
      series: [
        {
          name: 'series1',
          data: [31, 40, 28, 51, 42, 109, 100],
        },
      ],
      chart: {
        type: 'area',
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
      },
      xaxis: {
        type: 'datetime',
        categories: [
          '2018-09-19T00:00:00.000Z',
          '2018-09-19T01:30:00.000Z',
          '2018-09-19T02:30:00.000Z',
          '2018-09-19T03:30:00.000Z',
          '2018-09-19T04:30:00.000Z',
          '2018-09-19T05:30:00.000Z',
          '2018-09-19T06:30:00.000Z',
        ],
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm',
        },
      },
    };
  }
  ngOnInit(): void {
    this.displayedColumns = this.displayedColumnsHide;
    this.Init();
  }
  hide() {
    this.isHide = !this.isHide;
    console.log(this.isHide);
    if (this.isHide) this.displayedColumns = this.displayedColumnsHide;
    else this.displayedColumns = this.displayedColumnsNotHide;
    this.changeDetectorRefs.detectChanges();
  }
  public generateData(baseval, count, yrange) {
    var i = 0;
    var series = [];
    while (i < count) {
      var x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;
      var y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
      var z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;

      series.push([x, y, z]);
      baseval += 86400000;
      i++;
    }
    return series;
  }

  Init() {
    let account = new MgCmerchInqAcntData(
      'fiCode',
      'fiName',
      '5000611662242584',
      1234,
      'Account name',
      'AccntType',
      'MNT',
      123,
      123123123,
      '1997-07-16T19:20+01:00',
      'test'
    );
    this.accountRes = [account, account, account, account, account];

    let transaction = new MgCmerchInqAcntTranRefData(
      1,
      '2020-11-22',
      1000,
      'MNT',
      'guilgeenii utga',
      'suvag',
      'suvgiin ner1',
      ' suvgiin ner2',
      'sanhuugiin baiguullagiin dugar',
      'sanhuugiin baiguullagiin ner ',
      'sanhugiin baiguullagiin ner2',
      'ilgeesen sanhuugiin baiguullagiin icon',
      'ilgeesen sanhuugiin baiguullagiin dugaar',
      ' ilgeesen sanhuugiin baiguullagiin ner',
      'ilgeesen sanhuugiin baiguullagiin ner2',
      'ilgeesen sanhuugiin baiguullagiin brief',
      'ilgeesen sanhuugiin baiguullagiin brief 2',
      'ilgeesen sanhuugiin baiguullagiin icon',
      'huleen avsan baiguullagiin dugaar',
      'huleen avsan baiguullagiin ner',
      ' huleen avsan baiguullagiin ner 2',
      'huleen avsan baiguullagiin brief',
      'huleen avsan baiguullagiin brief2',
      'huleen avsan baiguullagiin icon',
      'ilgeesen id',
      'ilgeesen hereglegchiin ner',
      'ilgeesen hereglegchiin ner2',
      'huhuleen avsan hereglegchiin id',
      'huleen avsan hereglegchiin ner',
      'huleen avsan hereglegchiin ner2',
      1234567,
      'ilgeesen dansnii ner',
      ' ilgeesen dansnii ner2',
      'ilgeesen dansnii dugaar',
      987654321,
      'huleen avsan dansnii ner',
      'huleen avsan dansnii ner2',
      'hulen avsan dansnii dugaar',
      'tuluw',
      'tuluwiin ner',
      'tuluwiin ner2'
    );
    this.transactionRes = [
      transaction,
      transaction,
      transaction,
      transaction,
      transaction,
      transaction,
      transaction,
      transaction,
      transaction,
      transaction,
    ];
    console.log(transaction);
  }

  switchAcnt(index: number) {
    if (this.chosenCard == index) {
      // rout to accounta details
      this.router.navigate(['settings/general']);
    } else {
      this.chosenCard = index;
    }
  }
}
