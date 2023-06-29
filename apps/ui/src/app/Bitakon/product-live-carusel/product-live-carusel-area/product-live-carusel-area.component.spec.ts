import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductLiveCaruselAreaComponent } from './product-live-carusel-area.component';

describe('ProductLiveCaruselAreaComponent', () => {
  let component: ProductLiveCaruselAreaComponent;
  let fixture: ComponentFixture<ProductLiveCaruselAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductLiveCaruselAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductLiveCaruselAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
