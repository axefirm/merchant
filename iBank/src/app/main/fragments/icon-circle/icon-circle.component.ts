import { Component, OnInit, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'icon-circle',
  templateUrl: './icon-circle.component.html',
  styleUrls: ['./icon-circle.component.scss']
})
export class IconCircleComponent implements OnInit {
  @Input() borderColor: string;
  @Input() iconColor: string;
  @Input() backgroundColor: string;
  @Input() icon: string;
  @Input() scale: string;
  @Input() height: string;

  constructor() { }

  ngOnInit(): void {
    console.log(this.scale);
  }

}
