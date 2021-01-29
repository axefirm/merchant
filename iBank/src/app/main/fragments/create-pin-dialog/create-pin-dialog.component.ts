import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-pin-dialog',
  templateUrl: './create-pin-dialog.component.html',
  styleUrls: ['./create-pin-dialog.component.scss']
})
export class CreatePinDialogComponent implements OnInit {
  hide = true;
  constructor() { }

  
  ngOnInit(): void {
  }

}
