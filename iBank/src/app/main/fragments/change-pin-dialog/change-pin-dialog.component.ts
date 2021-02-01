import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-change-pin-dialog',
  templateUrl: './change-pin-dialog.component.html',
  styleUrls: ['./change-pin-dialog.component.scss']
})
export class ChangePinDialogComponent implements OnInit {
  hide = true;
  constructor() { }

  
  ngOnInit(): void {
  }

}
