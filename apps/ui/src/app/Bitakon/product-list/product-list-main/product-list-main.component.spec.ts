import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListMainComponent } from './product-list-main.component';

describe('ProductListMainComponent', () => {
  let component: ProductListMainComponent;
  let fixture: ComponentFixture<ProductListMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductListMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
