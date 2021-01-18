import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DialogType } from 'src/app/core/model/const';
import { DialogComponent } from '../../fragments/dialog/dialog.component';



@Component({
  selector: 'app-settings-security',
  templateUrl: './settings-security.component.html',
  styleUrls: ['./settings-security.component.scss']
})
export class SettingsSecurityComponent implements OnInit {

  constructor(public dialog: MatDialog) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  openDialog() {
    let  dialogRef = this.dialog.open(DialogComponent, {data: {type: DialogType.password , title: "Change password" }},
      );

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
