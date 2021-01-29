import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
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
  0,
  'txnDate',
  0,
  'txnCur',
  'txnDesc',
  'chnlType ',
  'chnlTypeName ',
  'chnlTypeName2 ',
  'fiCode ',
  'fiName ',
  'fiName2 ',
  'fiIcon ',
  'srcFiCode ',
  'srcFiName ',
  'srcFiName2 ',
  'srcFiBrief ',
  'srcFiBrief2 ',
  'srcFiIcon ',
  'dstFiCode ',
  'dstFiName ',
  'dstFiName2 ',
  'dstFiBrief ',
  'dstFiBrief2 ',
  'dstFiIcon ',
  'srcCustId ',
  'srcCustName ',
  'srcCustName2 ',
  'dstCustId ',
  'dstCustName ',
  'dstCustName2 ',
  0,
  'srcAcntName ',
  'srcAcntName2 ',
  'srcAcntCode ',
  0,
  'dstAcntName ',
  'dstAcntName2 ',
  'dstAcntCode ',
  'status ',
  'statusName ',
  'statusName2 '
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

  ngOnInit(): void {
    this.main = this.formBuilder.group({
      useramount: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      // type: new FormControl(''),
      // channel: new FormControl(''),
      // currency: new FormControl(''),
      // senderNumber: new FormControl(''),
      // recieverNumber: new FormControl(''),
      // transactionNumber: new FormControl(''),
    });
    this.filterData = {
      type: "",
      channel: "",
      currency: "",
      senderNumber: "",
      recieverNumber: "",
      transactionNumber: "",
    }
    this.statementDate = this.formBuilder.group({
      start: new FormControl("1700-01-28T13:15:18.547Z", Validators.required),
      end: new FormControl(new Date(), Validators.required),
    });
    this.referenceDate = this.formBuilder.group({
      // probably no transactions in 1700
      start: new FormControl("1700-01-28T13:15:18.547Z", Validators.required),
      end: new FormControl(new Date(), Validators.required),
    });
    this.getTranRefReportFull();
  }

  getTranRefReportFull() {

    const req = new MgCmerchGetTranRefReportReq(
      'merch code',
      this.filterData.type,
      this.filterData.channel,
      'status',
      this.filterData.currency,
      this.filterData.senderNumber,
      this.filterData.recieverNumber,
      this.filterData.transactionNumber,
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
        this.dataSource = Object.assign({}, data.responseData);
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
      this.filterData = Object.assign({}, result);
      this.getTranRefReportFull();
    });
  }
}
