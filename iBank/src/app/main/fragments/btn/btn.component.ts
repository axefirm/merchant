import { Component, OnInit, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.scss']
})
export class BtnComponent implements OnInit {
  @Input() borderColor: string;
  @Input() iconColor: string;
  @Input() backgroundColor: string;
  @Input() icon: string;
  @Input() title: string;
  @Input() description: string;
  @Input() badge: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
