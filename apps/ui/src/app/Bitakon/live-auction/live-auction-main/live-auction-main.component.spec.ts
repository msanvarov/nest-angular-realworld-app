import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveAuctionMainComponent } from './live-auction-main.component';

describe('LiveAuctionMainComponent', () => {
  let component: LiveAuctionMainComponent;
  let fixture: ComponentFixture<LiveAuctionMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiveAuctionMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveAuctionMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
