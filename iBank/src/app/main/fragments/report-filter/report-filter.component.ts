import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-report-filter',
  templateUrl: './report-filter.component.html',
  styleUrls: ['./report-filter.component.scss'],
})
export class ReportFilterComponent implements OnInit {
  hide = true;
  constructor(private formBuilder: FormBuilder) {}

  main: FormGroup;

  ngOnInit(): void {
    this.main = this.formBuilder.group({
      dateStart: new FormControl('', [Validators.required]),
      dateEnd: new FormControl('', [Validators.required]),
    });
  }
}
