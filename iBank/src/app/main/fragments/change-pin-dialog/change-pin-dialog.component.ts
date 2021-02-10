import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MgCredChangeRes, MgCredChangeReq } from 'src/app/core/model/app/changePin';
import { ApiService } from 'src/app/core/services/api.service';
import { JSEncrypt } from 'jsencrypt';

@Component({
  selector: 'app-change-pin-dialog',
  templateUrl: './change-pin-dialog.component.html',
  styleUrls: ['./change-pin-dialog.component.scss']
})
export class ChangePinDialogComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private api: ApiService, private router: Router, protected http: HttpClient,) { }

  main: FormGroup;

  changePinRes: MgCredChangeRes;
  ngOnInit(): void {
    this.main = this.formBuilder.group({
      pinOld: new FormControl('', [Validators.required]),
      pinNew: new FormControl('', [Validators.required]),
      pinNewConfirm: new FormControl('', [Validators.required]),
    });
  }


  changePin() {
    if (this.main.valid) {
      if ((this.main.value.pinNew.length == 4 || this.main.value.pinNew.length == 6 && this.main.value.pinOld.length == 4 || this.main.value.pinOld.length == 6) && this.main.value.pinNewConfirm.length == 4 || this.main.value.pinNewConfirm.length == 6) {
        if (this.main.value.pinNew != this.main.value.pinNewConfirm) {
          alert("taarahgui bn");
        } else {
          this.http.get("assets/cert/public.pem", { responseType: 'text' }).subscribe(data => {
            var encrypt = new JSEncrypt();
            encrypt.setPublicKey(data);
            let req = new MgCredChangeReq(encrypt.encrypt(this.main.value.pinOld), encrypt.encrypt(this.main.value.pinNew));
            console.log(req);
            this.api.changePin(req).subscribe(res => {
              console.log(res)
              this.changePinRes = res as MgCredChangeRes;
              if (this.changePinRes.responseCode != 0) {
                alert(this.changePinRes.responseDesc);
              } else {
                alert(this.changePinRes.responseDesc);
                this.router.navigate(['home']);
              }
            }, error => {
              alert(error);
            })
          }, error => {
            console.log(error);
          })
        }
      } else {
        alert("nuuts ug 4 esvel 6 urttai bh ystoi");
      }

    } else {
      alert("Shaardlagatai talbariin utgiig oruulna u");
    }
  }

}
