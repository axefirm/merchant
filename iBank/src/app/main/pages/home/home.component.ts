import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { trigger, transition, style, animate, state, animation,keyframes } from '@angular/animations'
import { TranslateService } from '@ngx-translate/core';
import { DialogType, eCredStatus, Pages } from 'src/app/core/model/const';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../fragments/dialog/dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
}) 

export class HomeComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private translate: TranslateService,
    private route: ActivatedRoute,public dialog: MatDialog ) {
    translate.setDefaultLang('en');
}

  readonly Pages = Pages;
  index: number;
  title = "Current";
  main: FormGroup;
  status: eCredStatus;
  ngOnInit(): void {
    this.status = this.route.snapshot.paramMap.get("status");
    console.log(this.status);
    if (this.status == eCredStatus.new) {
      this.openDialog();
    }

    this.index = Pages.current;
    this.main = this.formBuilder.group({
      useramount: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }
    // Хэл солих
    changeLang(lang: string) {
      this.translate.use(lang);
  
      location.replace(window.location.href);
      // window.location.href = window.location.href
      
    }
    
  changeIndex(val: number) {
    this.index = val;
    console.log(val);
  }

  openDialog() {
    let  dialogRef = this.dialog.open(DialogComponent, {data: {type: DialogType.changePinDialog , title: "Change pin" }},
      );

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
