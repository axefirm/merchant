import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Pages } from 'src/app/core/model/const';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Output() changeIndex = new EventEmitter<number>();
  readonly Pages = Pages;
  index = 1;
  
  constructor() { }

  ngOnInit(): void {
  }
  next(input: number) {
   this.index = input;
   this.changeIndex.emit(input);
  }
}
