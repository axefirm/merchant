import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-change-mobile',
  templateUrl: './change-mobile.component.html',
  styleUrls: ['./change-mobile.component.scss']
})
export class ChangeMobileComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private api: ApiService) { }

  main: FormGroup;
  ngOnInit(): void {
    this.main = this.formBuilder.group({
      pinOld: new FormControl('', [Validators.required]),
      pinNew: new FormControl('', [Validators.required]),
      pinNewConfirm: new FormControl('', [Validators.required]),
    });
  }

}
