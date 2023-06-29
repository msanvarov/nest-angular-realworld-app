import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsTwoComponent } from './products-two.component';

describe('ProductsTwoComponent', () => {
  let component: ProductsTwoComponent;
  let fixture: ComponentFixture<ProductsTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
