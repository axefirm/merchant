import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QrListItemComponent } from './qr-list-item.component';

describe('QrListItemComponent', () => {
  let component: QrListItemComponent;
  let fixture: ComponentFixture<QrListItemComponent>;

  beforeEach(async(() => {
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
