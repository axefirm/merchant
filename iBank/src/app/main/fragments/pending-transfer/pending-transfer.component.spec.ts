import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingTransferComponent } from './pending-transfer.component';

describe('PendingTransferComponent', () => {
  let component: PendingTransferComponent;
  let fixture: ComponentFixture<PendingTransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendingTransferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
