import { Component, Inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MgLoginDicData } from 'src/app/core/model/app/getDictionary';
import { ApiHelper } from 'src/app/core/services/api-helper';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-report-filter',
  templateUrl: './report-filter.component.html',
  styleUrls: ['./report-filter.component.scss'],
})
export class ReportFilterComponent implements OnInit {
  hide = true;
  constructor(
    private formBuilder: FormBuilder,
    public api: ApiService,
    private dialogRef: MatDialogRef<ReportFilterComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) {}

  main: FormGroup;

  typeDict: MgLoginDicData[];
  channelDict: MgLoginDicData[];
  currencyDict: MgLoginDicData[];
  senderNumberDict: MgLoginDicData[];
  recieverNumberDict: MgLoginDicData[];
  transactionNumberDict: MgLoginDicData[];

  ngOnInit(): void {
    this.main = this.formBuilder.group({
      type: new FormControl(''),
      channel: new FormControl(''),
      currency: new FormControl(''),
      senderNumber: new FormControl(''),
      recieverNumber: new FormControl(''),
      transactionNumber: new FormControl(''),
    });

    this.getDictAll();
  }

  async getDictAll() {
    this.api.getDictionary('dictMerchTxnType').subscribe((data) => {
      if (data.responseCode == 0) {

        this.typeDict = data.responseData;
        //      Temprorary
        this.channelDict = data.responseData;
        this.currencyDict = data.responseData;
        this.senderNumberDict = data.responseData;
        this.recieverNumberDict = data.responseData;
        this.transactionNumberDict = data.responseData;
      } else {
        alert(data.responseDesc);
      }
    });
  }

  cancel() {
    this.dialogRef.close();
  }
  save() {
    this.dialogRef.close(this.main.value);
  }
  doSomething(value) {
    // console.log(value);
  }
}
