import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomAddedToCartDialogComponent } from './custom-added-to-cart-dialog.component';

describe('CustomAddedToCartDialogComponent', () => {
  let component: CustomAddedToCartDialogComponent;
  let fixture: ComponentFixture<CustomAddedToCartDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomAddedToCartDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomAddedToCartDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
