import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifTranComponent } from './notif-tran.component';

describe('NotifTranComponent', () => {
  let component: NotifTranComponent;
  let fixture: ComponentFixture<NotifTranComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotifTranComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotifTranComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
