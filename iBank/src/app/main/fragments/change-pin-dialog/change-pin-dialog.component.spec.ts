import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePinDialogComponent } from './change-pin-dialog.component';

describe('ChangePinDialogComponent', () => {
  let component: ChangePinDialogComponent;
  let fixture: ComponentFixture<ChangePinDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangePinDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangePinDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
