import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTabMainComponent } from './product-tab-main.component';

describe('ProductTabMainComponent', () => {
  let component: ProductTabMainComponent;
  let fixture: ComponentFixture<ProductTabMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductTabMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductTabMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
