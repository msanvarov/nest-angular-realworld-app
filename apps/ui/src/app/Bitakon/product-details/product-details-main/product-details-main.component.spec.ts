import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailsMainComponent } from './product-details-main.component';

describe('ProductDetailsMainComponent', () => {
  let component: ProductDetailsMainComponent;
  let fixture: ComponentFixture<ProductDetailsMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDetailsMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
