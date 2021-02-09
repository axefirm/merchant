import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MgLoginDicData } from 'src/app/core/model/app/getDictionary';
import { MgCmerchAddMembIntoMerchReq } from 'src/app/core/model/Online user registration/addMembIntoMerch';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-confirm-user',
  templateUrl: './confirm-user.component.html',
  styleUrls: ['./confirm-user.component.scss']
})
export class ConfirmUserComponent implements OnInit {

  @Input() userData: any;
  @Input() roleInfo: MgLoginDicData;
  constructor(private api: ApiService, private dialogRef: MatDialogRef<ConfirmUserComponent>, ) { }

  ngOnInit(): void {


    console.log(this.userData);
    console.log(this.roleInfo);
  }

  saveUser() {

    this.api.addMembIntoMerch(this.userData).subscribe(data => {
      if(data.responseCode == 0) {
      }
      console.log(data);

    })

    
  }

  cancel() {
    this.dialogRef.close();
  }
}
