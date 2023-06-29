import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFiterMainComponent } from './product-fiter-main.component';

describe('ProductFiterMainComponent', () => {
  let component: ProductFiterMainComponent;
  let fixture: ComponentFixture<ProductFiterMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductFiterMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductFiterMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
