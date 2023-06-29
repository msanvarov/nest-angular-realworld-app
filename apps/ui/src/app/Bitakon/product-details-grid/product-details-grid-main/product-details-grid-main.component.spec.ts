import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailsGridMainComponent } from './product-details-grid-main.component';

describe('ProductDetailsGridMainComponent', () => {
  let component: ProductDetailsGridMainComponent;
  let fixture: ComponentFixture<ProductDetailsGridMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDetailsGridMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailsGridMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
