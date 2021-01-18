import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsVerifyComponent } from './settings-verify.component';

describe('SettingsVerifyComponent', () => {
  let component: SettingsVerifyComponent;
  let fixture: ComponentFixture<SettingsVerifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsVerifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsVerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
