import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { QrListItemComponent } from './qr-list-item.component';

describe('QrListItemComponent', () => {
  let component: QrListItemComponent;
  let fixture: ComponentFixture<QrListItemComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ QrListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QrListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
