import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MgCredChangeReq } from 'src/app/core/model/app/changePin';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-change-pin',
  templateUrl: './change-pin.component.html',
  styleUrls: ['./change-pin.component.scss']
})
export class ChangePinComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private api: ApiService) { }

  main: FormGroup;
  ngOnInit(): void {
    this.main = this.formBuilder.group({
      pinOld: new FormControl('', [Validators.required]),
      pinNew: new FormControl('', [Validators.required]),
      pinNewConfirm: new FormControl('', [Validators.required]),
    });
  }
  changePin() {
    if (this.main.value.pinNew != this.main.value.pinNewConfirm) {
      alert("taarahgui bn");
    }else{
      let req = new MgCredChangeReq(this.main.value.pinOld, this.main.value.pinNew);
      
    }
  }

}
