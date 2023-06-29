import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveAuctionAreaComponent } from './live-auction-area.component';

describe('LiveAuctionAreaComponent', () => {
  let component: LiveAuctionAreaComponent;
  let fixture: ComponentFixture<LiveAuctionAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiveAuctionAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveAuctionAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
