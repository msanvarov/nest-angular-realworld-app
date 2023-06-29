import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductLiveMainComponent } from './product-live-main.component';

describe('ProductLiveMainComponent', () => {
  let component: ProductLiveMainComponent;
  let fixture: ComponentFixture<ProductLiveMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductLiveMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductLiveMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
