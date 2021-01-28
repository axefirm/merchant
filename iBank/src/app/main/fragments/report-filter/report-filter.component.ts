import { Component, Inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-report-filter',
  templateUrl: './report-filter.component.html',
  styleUrls: ['./report-filter.component.scss'],
})
export class ReportFilterComponent implements OnInit {
  hide = true;
  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<ReportFilterComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) {}

  main: FormGroup;
  types: string[] = ['type1', 'type2'];
  channels: string[] = ['type1', 'type2'];
  currencies: string[] = ['type1', 'type2'];
  senderNumbers: string[] = ['type1', 'type2'];
  recieverNumbers: string[] = ['type1', 'type2'];
  transactionNumbers: string[] = ['type1', 'type2'];

  cancel() {
    this.dialogRef.close();
  }
  save() {
    this.dialogRef.close(this.main.value);
  }

  ngOnInit(): void {
    this.main = this.formBuilder.group({
      type: new FormControl(''),
      channel: new FormControl(''),
      currency: new FormControl(''),
      senderNumber: new FormControl(''),
      recieverNumber: new FormControl(''),
      transactionNumber: new FormControl(''),
    });
  }
}
