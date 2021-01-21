import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DialogType } from 'src/app/core/model/const';
import { DialogComponent } from '../../fragments/dialog/dialog.component';
export interface adminRole {
  
}
@Component({
  selector: 'app-settings-admin',
  templateUrl: './settings-admin.component.html',
  styleUrls: ['./settings-admin.component.scss']
})
export class SettingsAdminComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialog() {
    let  dialogRef = this.dialog.open(DialogComponent, {data: {type: DialogType.addUser , title: "Add user" }},
      );

  }

}
