import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailsTabAreaComponent } from './product-details-tab-area.component';

describe('ProductDetailsTabAreaComponent', () => {
  let component: ProductDetailsTabAreaComponent;
  let fixture: ComponentFixture<ProductDetailsTabAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDetailsTabAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailsTabAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
