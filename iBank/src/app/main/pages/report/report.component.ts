import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MgLoginDicData } from 'src/app/core/model/app/getDictionary';
import { DialogType } from 'src/app/core/model/const';
import {
  MgCmerchGetTranRefReportReq,
  MgCmerchInqAcntTranRefData,
} from 'src/app/core/model/enquire/getTranRefReport';
import { ApiService } from 'src/app/core/services/api.service';
import { DialogComponent } from '../../fragments/dialog/dialog.component';

//place holders start/////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////
const ELEMNT_DATA1_EX: MgCmerchInqAcntTranRefData = new MgCmerchInqAcntTranRefData(
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
const ELEMENT_DATA1: MgCmerchInqAcntTranRefData[] = [
  ELEMNT_DATA1_EX,
  ELEMNT_DATA1_EX,
  ELEMNT_DATA1_EX,
  ELEMNT_DATA1_EX,
  ELEMNT_DATA1_EX,
];
/// Place holders end
/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss'],
})
export class ReportComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    public dialog: MatDialog,
    private api: ApiService
  ) {}

  displayedColumns: string[] = ['bankamount', 'amount', 'acntNo', 'date'];
  displayedColumns2: string[] = [
    'bank',
    'status',
    'date',
    'type',
    'sender',
    'account',
    'amount',
  ];
  dataSource: MgCmerchInqAcntTranRefData[];

  test = true;

  optional = 'optional';

  main: FormGroup;
  statementDate: FormGroup;
  referenceDate: FormGroup;
  filterData: any;
  dictMerchTxnType: MgLoginDicData[];
  // dictMerchTxnChannel: MgLoginDicData[];
  // dictMerchTxnCurrency: MgLoginDicData[];
  // dictMerchTxnSenderNumber: MgLoginDicData[];
  // dictMerchTxnRecieverNumber: MgLoginDicData[];
  // dictMerchTxn: MgLoginDicData[];

  ngOnInit(): void {
    this.prepareData();
    this.getTranRefReportFull();
  }

  prepareData() {
    this.main = this.formBuilder.group({
      useramount: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
    // this.filterData = this.formBuilder.group({
    //   type: '',
    //   channel: '',
    //   currency: '',
    //   senderNumber: '',
    //   recieverNumber: '',
    //   transactionNumber: '',
    // });
    this.statementDate = this.formBuilder.group({
      start: new FormControl('1700-01-28T13:15:18.547Z', Validators.required),
      end: new FormControl(new Date(), Validators.required),
    });
    this.referenceDate = this.formBuilder.group({
      // probably no transactions in 1700
      start: new FormControl('1700-01-28T13:15:18.547Z', Validators.required),
      end: new FormControl(new Date(), Validators.required),
    });
  }

  getTranRefReportFull() {
    console.log(sessionStorage.getItem("merchant"));
    const req = new MgCmerchGetTranRefReportReq(
      sessionStorage.getItem("merchant"),
      this.filterData.type.id,
      this.filterData.channel.id,
      'status',
      this.filterData.currency.id,
      this.filterData.senderNumber.id,
      this.filterData.recieverNumber.id,
      this.filterData.transactionNumber.id,
      this.referenceDate.value.start,
      this.referenceDate.value.end,
      0,
      'wallet'
    );
    this.getTranRefReport(req);
  }

  getTranRefReport(req: MgCmerchGetTranRefReportReq) {
    this.api.getTranRefReport(req).subscribe((data) => {
      if (data.responseCode == 0) {
        this.dataSource = data.responseData as MgCmerchInqAcntTranRefData[];
      } else {
        alert(data.responseDesc);
        alert('Turshiltiin medeelel orj baina');
        this.dataSource = ELEMENT_DATA1;
      }
    });
  }

  openDialogReportFilter() {
    let dialogRef = this.dialog.open(DialogComponent, {
      data: { type: DialogType.reportFilter, title: 'Filter' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
      this.filterData = result as any;
      this.getTranRefReportFull();
    });
  }
}
