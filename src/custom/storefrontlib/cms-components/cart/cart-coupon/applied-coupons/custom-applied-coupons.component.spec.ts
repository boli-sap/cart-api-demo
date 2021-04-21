import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomAppliedCouponsComponent } from './custom-applied-coupons.component';

describe('CustomAppliedCouponsComponent', () => {
  let component: CustomAppliedCouponsComponent;
  let fixture: ComponentFixture<CustomAppliedCouponsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomAppliedCouponsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomAppliedCouponsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
