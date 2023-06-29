import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductLiveCaruselMainComponent } from './product-live-carusel-main.component';

describe('ProductLiveCaruselMainComponent', () => {
  let component: ProductLiveCaruselMainComponent;
  let fixture: ComponentFixture<ProductLiveCaruselMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductLiveCaruselMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductLiveCaruselMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
