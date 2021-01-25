import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CurrencyInfoComponent } from './currency-info.component';

describe('CurrencyInfoComponent', () => {
  let component: CurrencyInfoComponent;
  let fixture: ComponentFixture<CurrencyInfoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrencyInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
