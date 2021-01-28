import { Injectable } from '@angular/core';
import { MgCmerchPendTxn } from '../model/transaction/selectPendTxns';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  sharedData: string;

  constructor() { }
  get data(): string {
    return this.sharedData;
  }

  set data(value: string) {
    this.sharedData = value;
  }
}
