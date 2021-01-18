import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DialogType } from 'src/app/core/model/const';
import { DialogComponent } from '../../fragments/dialog/dialog.component';



@Component({
  selector: 'app-settings-verify',
  templateUrl: './settings-verify.component.html',
  styleUrls: ['./settings-verify.component.scss']
})
export class SettingsVerifyComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialog() {
    let  dialogRef = this.dialog.open(DialogComponent, {data: {type: DialogType.location , title: "Add location" }},
      );

  }
}
