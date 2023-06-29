import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularSellersComponent } from './popular-sellers.component';

describe('PopularSellersComponent', () => {
  let component: PopularSellersComponent;
  let fixture: ComponentFixture<PopularSellersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopularSellersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularSellersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
