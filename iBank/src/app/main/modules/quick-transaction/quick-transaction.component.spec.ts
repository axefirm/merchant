import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { QuickTransactionComponent } from './quick-transaction.component';

describe('QuickTransactionComponent', () => {
  let component: QuickTransactionComponent;
  let fixture: ComponentFixture<QuickTransactionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickTransactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
