import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreattorShopComponent } from './creattor-shop.component';

describe('CreattorShopComponent', () => {
  let component: CreattorShopComponent;
  let fixture: ComponentFixture<CreattorShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreattorShopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreattorShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
