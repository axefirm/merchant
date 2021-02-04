import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyTanComponent } from './verify-tan.component';

describe('VerifyTanComponent', () => {
  let component: VerifyTanComponent;
  let fixture: ComponentFixture<VerifyTanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerifyTanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifyTanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
