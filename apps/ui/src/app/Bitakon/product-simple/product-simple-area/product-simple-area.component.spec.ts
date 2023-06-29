import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSimpleAreaComponent } from './product-simple-area.component';

describe('ProductSimpleAreaComponent', () => {
  let component: ProductSimpleAreaComponent;
  let fixture: ComponentFixture<ProductSimpleAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductSimpleAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductSimpleAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
