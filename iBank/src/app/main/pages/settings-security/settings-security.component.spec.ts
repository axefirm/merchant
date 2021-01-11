import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SettingsSecurityComponent } from './settings-security.component';

describe('SettingsSecurityComponent', () => {
  let component: SettingsSecurityComponent;
  let fixture: ComponentFixture<SettingsSecurityComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsSecurityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsSecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
