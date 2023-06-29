import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductGridMainComponent } from './product-grid-main.component';

describe('ProductGridMainComponent', () => {
  let component: ProductGridMainComponent;
  let fixture: ComponentFixture<ProductGridMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductGridMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductGridMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
