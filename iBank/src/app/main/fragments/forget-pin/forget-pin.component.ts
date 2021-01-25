import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-forget-pin',
  templateUrl: './forget-pin.component.html',
  styleUrls: ['./forget-pin.component.scss']
})
export class ForgetPinComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private api: ApiService) { }

  main: FormGroup;
  ngOnInit(): void {
    this.main = this.formBuilder.group({
      useramount: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }
  forgetPin() {

  }

}
