import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListItemsComponent } from './product-list-items.component';

describe('ProductListItemsComponent', () => {
  let component: ProductListItemsComponent;
  let fixture: ComponentFixture<ProductListItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductListItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
