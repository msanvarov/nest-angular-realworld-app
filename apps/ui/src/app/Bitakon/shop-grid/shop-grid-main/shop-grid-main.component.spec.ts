import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopGridMainComponent } from './shop-grid-main.component';

describe('ShopGridMainComponent', () => {
  let component: ShopGridMainComponent;
  let fixture: ComponentFixture<ShopGridMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopGridMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopGridMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
