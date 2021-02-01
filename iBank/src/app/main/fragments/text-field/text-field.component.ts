import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormControl} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MgLoginDicData } from 'src/app/core/model/app/getDictionary';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.scss']
})
export class TextFieldComponent implements OnInit {
  @Input() placeholder: string;
  @Input() description: string;
  @Input() controller: FormControl;
  @Input() maxlength: number;
  @Input() isSelector: boolean = false;
  @Input() selectorData:  MgLoginDicData[];
  @Output() changeOrg = new EventEmitter<number>();


  constructor() {
  }

  ngOnInit(): void {
  }
  selectionChange(event) {
    this.changeOrg.emit(event);
  }
}
