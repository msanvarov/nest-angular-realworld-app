import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailsTabMainComponent } from './product-details-tab-main.component';

describe('ProductDetailsTabMainComponent', () => {
  let component: ProductDetailsTabMainComponent;
  let fixture: ComponentFixture<ProductDetailsTabMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDetailsTabMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailsTabMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
