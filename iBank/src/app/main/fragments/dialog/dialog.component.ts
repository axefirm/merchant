import { ThisReceiver } from '@angular/compiler';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { inject } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ResolveStart } from '@angular/router';
import { DialogType } from 'src/app/core/model/const';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {

  test = DialogType;
  value = this.data.value;
  roles = this.data.roleId;
  userInfo = this.data.userData;
  
  
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<DialogComponent>) {
  }
  getLocData(value) {
    console.log(value);
    this.dialogRef.close(value);
  }


}
