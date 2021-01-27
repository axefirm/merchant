import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';

export interface TransactionRefference {
  amount: string;
  status: string;
  type: string;
  bankName: string;
  correspondentName: string;
  senderName: string;
  accountNo: string;
  description: string;
  date: string;
  trNumber: string;
  senderNo: string;
}

const ELEMENT_DATA2: TransactionRefference[] = [
  {
    bankName: 'XacBank',
    amount: '6000',
    correspondentName: 'Enkhbayar',
    accountNo: '5000611662',
    date: '10 Feb 2020',
    description: 'Vodka',
    status: 'Successful',
    type: 'qPos',
    senderName: "Enkhbayar",
    senderNo: "5000611662",
    trNumber: "25001456",
  },
];

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
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss'],
})
export class ReportComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  displayedColumns: string[] = ['bankamount', 'amount', 'acntNo', 'date'];
  displayedColumns2: string[] = ['bank', 'status', 'date', 'type', 'sender', 'account', 'amount'];
  dataSource = ELEMENT_DATA1;
  data2Source = ELEMENT_DATA2;

  test = true;

  main: FormGroup;
  campaignOne: FormGroup;

  ngOnInit(): void {
    this.main = this.formBuilder.group({
      useramount: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }
}
