import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qr-list-item',
  templateUrl: './qr-list-item.component.html',
  styleUrls: ['./qr-list-item.component.scss']
})
export class QrListItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  open(){
    console.log("test");
  }
}
