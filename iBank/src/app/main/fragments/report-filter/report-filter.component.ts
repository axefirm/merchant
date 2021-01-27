import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-report-filter',
  templateUrl: './report-filter.component.html',
  styleUrls: ['./report-filter.component.scss']
})
export class ReportFilterComponent implements OnInit {
  hide = true;
  constructor() { }

  
  ngOnInit(): void {
  }

}
