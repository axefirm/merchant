import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { MgCmerchPendTxn } from 'src/app/core/model/transaction/selectPendTxns';
import { DataService } from 'src/app/core/services/data.service'
@Component({
  selector: 'app-pending-transfer',
  templateUrl: './pending-transfer.component.html',
  styleUrls: ['./pending-transfer.component.scss']
})


/*-------------router navigate --------------------*/

//export class PendingTransferComponent  { 

// arrayOfValues: Array<string>;

//   constructor(private route: ActivatedRoute) { }

//   ngOnInit(): void {

//     const myArray = this.route.snapshot.queryParamMap.get('myArray');
//     if (myArray === null) {
//       this.arrayOfValues = new Array<string>();
//     } else {
//       this.arrayOfValues = JSON.parse(myArray);
//     }
//     console.log(this.arrayOfValues);

//   }

export class PendingTransferComponent implements OnInit {

  constructor(private dataService: DataService) { }
  ngOnInit() {
    // console.log(this.dataService.data);
    let arr;

    arr =  this.dataService.data.split(',');
    console.log(arr);   
    Object.keys(this.dataService.data).map(function(key){  
      arr.push({[key]: this.dataService.data[key]})  
      return arr;
    });
     arr =  this.dataService.data;
    console.log(arr);   
  }

}
