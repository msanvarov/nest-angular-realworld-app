import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCaruselMainComponent } from './product-carusel-main.component';

describe('ProductCaruselMainComponent', () => {
  let component: ProductCaruselMainComponent;
  let fixture: ComponentFixture<ProductCaruselMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductCaruselMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCaruselMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
