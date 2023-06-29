import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopGridAreaComponent } from './shop-grid-area.component';

describe('ShopGridAreaComponent', () => {
  let component: ShopGridAreaComponent;
  let fixture: ComponentFixture<ShopGridAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopGridAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopGridAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
