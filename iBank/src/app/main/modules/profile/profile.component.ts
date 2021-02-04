import {
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  // animations: [
  //   trigger('proEditorFade', [
  //     // state('in', style({ transform: 'translateY(-100%)' })),
  //     transition(':enter', [
  //       style({opacity: 0, offset: 0}),
  //       animate('200ms ease-in', style({opacity: 1, offset: 1.0}))
  //     ]),
  //     transition(':leave', [
  //       animate('200ms ease-in', style({opacity: 0, offset: 0}))
  //     ]),
  //   ]),
  //   trigger('proEditorSlide', [
  //     transition(':enter', [
  //       style({transform: 'translateY(-100%) translateX(0%)'}),
  //       animate('200ms ease-in', style({transform: 'translateY(0%) translateX(0%)'}))
  //     ]),
  //     transition(':leave', [
  //       animate('200ms ease-in', style({transform: 'translateY(-100%) translateX(0%)'}))
  //     ])
  //   ])
  //   // trigger('closeProEditor', [
  //   //   state('in', style({ transform: 'translateX(0)' })),
  //   //   transition(
  //   //     'void => *',
  //   //     animate(
  //   //       '300ms ease-out',
  //   //       keyframes([
  //   //         style({ opacity: 0, offset: 0 }),
  //   //         style({ opacity: 1, offset: 1.0 }),
  //   //       ])
  //   //     )
  //   //   ),
  //   // ]),
  // ],
})
export class ProfileComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private translate: TranslateService,
    private router: Router,
  ) {
    translate.setDefaultLang('en');
  }

  main: FormGroup;

  ngOnInit(): void {
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
  addImage() {}
  openProfile() {
    this.router.navigate(['settings/general', { tabStatus: 'personal' }]);
  }
  logOut() {}
}
