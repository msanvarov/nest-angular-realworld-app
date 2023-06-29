import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSimpleMainComponent } from './product-simple-main.component';

describe('ProductSimpleMainComponent', () => {
  let component: ProductSimpleMainComponent;
  let fixture: ComponentFixture<ProductSimpleMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductSimpleMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductSimpleMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
