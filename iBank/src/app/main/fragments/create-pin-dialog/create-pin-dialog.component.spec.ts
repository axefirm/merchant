import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePinDialogComponent } from './create-pin-dialog.component';

describe('CreatePinDialogComponent', () => {
  let component: CreatePinDialogComponent;
  let fixture: ComponentFixture<CreatePinDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePinDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePinDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
