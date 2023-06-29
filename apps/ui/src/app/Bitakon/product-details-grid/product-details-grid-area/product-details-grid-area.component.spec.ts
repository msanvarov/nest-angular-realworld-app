import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailsGridAreaComponent } from './product-details-grid-area.component';

describe('ProductDetailsGridAreaComponent', () => {
  let component: ProductDetailsGridAreaComponent;
  let fixture: ComponentFixture<ProductDetailsGridAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDetailsGridAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailsGridAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
