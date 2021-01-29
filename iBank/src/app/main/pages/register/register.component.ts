import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { ListKeyManager } from '@angular/cdk/a11y';
import {
  animate,
  keyframes,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { ApiService } from 'src/app/core/services/api.service';
import {
  MgCmerchStartEnrollByMerchReq,
  MgCmerchStartEnrollByMerchRes,
} from 'src/app/core/model/Online user registration/startEnrollByMerch';
import { MgCmerchVerifyLoginCodeReq } from 'src/app/core/model/Online user registration/verifyLoginCode';
import { MgCmerchEnrollMerchReq, MgCmerchMainRes } from 'src/app/core/model/Online user registration/enrollMerch';
import { MgCmerchAddMembIntoMerchReq } from 'src/app/core/model/Online user registration/addMembIntoMerch';
import { MgCmerchInqAcntListReq } from 'src/app/core/model/enquire/getMerchAcntList';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../fragments/dialog/dialog.component';
import { DialogType } from 'src/app/core/model/const';
import { ActivatedRoute } from '@angular/router';
import { MgGetDicReq, MgLoginDicData } from 'src/app/core/model/app/getDictionary';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  animations: [
    trigger('myAnimation', [
      state('in', style({ transform: 'translateX(0)' })),
      transition(
        'void => *',
        animate(
          '600ms ease-in',
          keyframes([
            style({ opacity: 0, offset: 0 }),
            style({ opacity: 1, offset: 1.0 }),
          ])
        )
      ),
    ]),
  ],
})
export class RegisterComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private api: ApiService,
    public dialog: MatDialog,
    private route: ActivatedRoute
  ) { }

  main: FormGroup;
  indicator = 0;
  maxIndex = 4;
  regAsComp = true;

  enrollId;
  custId;
  sub: any;
  // Get dictionary
  merchTypeList: MgLoginDicData[];
  orgTypeList: MgLoginDicData[];
  orgType: number;
  merchTypeId;

  ngOnInit(): void {
    this.reset();
    this.sub = this.route.snapshot.paramMap.get("status");
    console.log(this.sub);
    if (this.sub == "enroll") {
      this.indicator = 2;
    }
    this.getDic();
  }

  reset() {
    this.indicator = 0;
    this.main = this.formBuilder.group({
      amount: new FormControl('', [Validators.required]),
      mobileNo: new FormControl('', [Validators.required]),
      regNo: new FormControl('', [Validators.required]),
      fname: new FormControl('', [Validators.required]),
      lname: new FormControl('', [Validators.required]),
      tan: new FormControl('', [Validators.required]),

      name: new FormControl('', [Validators.required]),
      companyRegister: new FormControl('', [Validators.required]),
      orgTypeId: new FormControl('', [Validators.required]),
    });
  }

  // Get dictionary
  getDic() {
    this.api.getDictionary('dictMerchType').subscribe(data => {
      if (data.responseCode == 0) {
        this.merchTypeList = data.responseData as MgLoginDicData[];
        console.log(this.merchTypeList);
      }
    })

    this.api.getDictionary('dicPayeeOrgType').subscribe(data => {
      if (data.responseCode == 0) {
        this.orgTypeList = data.responseData as MgLoginDicData[];
        console.log(this.orgTypeList);
      }
    })
  }

  startEnrollByMerch() {
    const startEnrollByMerchReq = new MgCmerchStartEnrollByMerchReq(
      'ARD_DIGITAL',
      this.main.value.mobileNo,
      this.main.value.regNo,
      this.main.value.fname,
      this.main.value.lname
    );
    this.api.startEnrollByMerch(startEnrollByMerchReq).subscribe((data) => {
      if (data.responseCode == 0) {
        this.enrollId = data.enrollId;
        this.next(this.indicator + 1);
      } else {
        alert(data.responseDesc);
        this.reset();
      }
    });
  }

  verifyTan() {
    const verifyLoginCodeReq = new MgCmerchVerifyLoginCodeReq(
      this.enrollId,
      this.main.value.tan
    );
    this.api.verifyLoginCode(verifyLoginCodeReq).subscribe((data) => {
      if (data.responseCode == 0) {
        this.custId = data.custId;
        this.next(this.indicator + 1);
      } else {
        alert(data.responseDesc);
        //For now just skip
        this.next(this.indicator + 1);
      }
    });
  }

  enrollMerch() {
    //idk
    const optional = '';
    const enrollMerchReq = new MgCmerchEnrollMerchReq(
      this.main.value.name,
      this.main.value.companyRegister,
      optional,
      this.merchTypeId,
      optional
    );

    if (this.merchTypeId == "CO") {
      enrollMerchReq.orgTypeId = this.orgType;
    }
    console.log(enrollMerchReq)
    this.api.enrollMerch(enrollMerchReq).subscribe((res) => {
      // test
      // let res = new MgCmerchMainRes(0, ""); 
      if (res.responseCode == 0) {
        this.next(this.indicator + 1);
      } else {
        console.log(res)
        alert(res.responseDesc);
      }
    });
  }

  Finish() {
    // To be continued ...
    // const roleId = 12334;
    // const merchCode = "where?";
    // const addMembIntoMerchReq = new MgCmerchAddMembIntoMerchReq (
    //   this.main.value.mobileno,
    //   this.main.value.regNo,
    //   this.main.value.fname,
    //   this.main.value.lname,
    //   roleId,
    //   merchCode,
    // )
    this.openDialogCreatePassword();
  }

  openDialogCreatePassword() {
    let dialogRef = this.dialog.open(DialogComponent, {
      data: { type: DialogType.createPassword, title: 'Create a password' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  changeRegAs(input: boolean, id) {
    this.regAsComp = input;
    console.log(id);
    this.merchTypeId = id;
  }

  next(input: number) {
    // console.log(this.main);
    if (input < this.maxIndex) {
      this.indicator = input;
    } else {
      // TODO
      // this.indicator = 0;
    }
  }

  changeOrg(value) {
    this.orgType = Number(value);
  }
}
