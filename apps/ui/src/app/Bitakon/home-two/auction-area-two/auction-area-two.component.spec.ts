import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuctionAreaTwoComponent } from './auction-area-two.component';

describe('AuctionAreaTwoComponent', () => {
  let component: AuctionAreaTwoComponent;
  let fixture: ComponentFixture<AuctionAreaTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuctionAreaTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuctionAreaTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
