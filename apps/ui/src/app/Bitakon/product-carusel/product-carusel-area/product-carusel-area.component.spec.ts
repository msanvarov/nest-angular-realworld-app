import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCaruselAreaComponent } from './product-carusel-area.component';

describe('ProductCaruselAreaComponent', () => {
  let component: ProductCaruselAreaComponent;
  let fixture: ComponentFixture<ProductCaruselAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductCaruselAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCaruselAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
