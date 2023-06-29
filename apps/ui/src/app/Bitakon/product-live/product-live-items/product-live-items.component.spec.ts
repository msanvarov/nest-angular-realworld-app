import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductLiveItemsComponent } from './product-live-items.component';

describe('ProductLiveItemsComponent', () => {
  let component: ProductLiveItemsComponent;
  let fixture: ComponentFixture<ProductLiveItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductLiveItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductLiveItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
