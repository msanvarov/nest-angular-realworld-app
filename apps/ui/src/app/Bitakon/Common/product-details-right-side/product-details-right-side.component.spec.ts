import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailsRightSideComponent } from './product-details-right-side.component';

describe('ProductDetailsRightSideComponent', () => {
  let component: ProductDetailsRightSideComponent;
  let fixture: ComponentFixture<ProductDetailsRightSideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDetailsRightSideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailsRightSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
