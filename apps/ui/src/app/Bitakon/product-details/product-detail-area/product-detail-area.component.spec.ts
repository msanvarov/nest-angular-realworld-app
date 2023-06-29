import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailAreaComponent } from './product-detail-area.component';

describe('ProductDetailAreaComponent', () => {
  let component: ProductDetailAreaComponent;
  let fixture: ComponentFixture<ProductDetailAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDetailAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
