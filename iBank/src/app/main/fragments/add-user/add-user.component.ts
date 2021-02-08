import { Inject } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
// import * as EventEmitter from 'events';
// import { OutgoingMessage } from 'http';
import { MgLoginDicData } from 'src/app/core/model/app/getDictionary';
import { DialogType } from 'src/app/core/model/const';
import { MgCmerchAddMembIntoMerchReq } from 'src/app/core/model/Online user registration/addMembIntoMerch';
import { ApiService } from 'src/app/core/services/api.service';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  merchCode: string;
  roleId: number;
  userData: MgCmerchAddMembIntoMerchReq;

  constructor(
    private formBuilder: FormBuilder, 
    private api: ApiService, 
    private dialogRef: MatDialogRef<AddUserComponent>, 
    @Inject(MAT_DIALOG_DATA) data,
    public dialog: MatDialog,
    ) { }

  @Input() roleInfo: MgLoginDicData;

  // @Output() confirmUserDet = new EventEmitter<MgCmerchAddMembIntoMerchReq>();
  addUser: FormGroup;

  ngOnInit(): void {
    this.addUser = this.formBuilder.group({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      idNumber: new FormControl('', [Validators.required]),
      position: new FormControl('', [Validators.required]),
      phoneNumber: new FormControl('', [Validators.required]),
    });

    this.merchCode = sessionStorage.getItem('merchant');
    console.log(this.roleInfo);
    this.roleId = parseInt(this.roleInfo.id);
    // this.addUser.controls['position'].setValue(parseInt(this.roleInfo.id));
  }

  saveUser() {

    console.log(this.roleId);
    this.userData = new MgCmerchAddMembIntoMerchReq(this.addUser.value.phoneNumber, this.addUser.value.idNumber, this.addUser.value.firstName, this.addUser.value.lastName, this.roleId, this.merchCode);
    this.addUser.value.position = this.roleId;
    console.log(this.userData);

    let dialogRef = this.dialog.open(DialogComponent, { data: { type: DialogType.confirmUser, title: "Confirm ", userData: this.addUser.value , roleId: this.roleInfo } },
    );
    this.dialogRef.close();

    // this.api.addMembIntoMerch(req).subscribe(data => {
    //   if(data.responseCode == 0) {
    //   }
    //   console.log(data);

    // })

    console.log(this.addUser.value);
  }

  cancel() {
    this.dialogRef.close();
  }

}
