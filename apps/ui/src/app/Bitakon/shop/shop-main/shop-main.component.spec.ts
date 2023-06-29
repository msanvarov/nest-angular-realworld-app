import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopMainComponent } from './shop-main.component';

describe('ShopMainComponent', () => {
  let component: ShopMainComponent;
  let fixture: ComponentFixture<ShopMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
