import { Component, OnInit, Input } from '@angular/core';
import { FormControl} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';

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

  constructor() {
  }

  ngOnInit(): void {
  }
}
