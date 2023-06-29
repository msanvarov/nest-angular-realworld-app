import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BidsAreaComponent } from './bids-area.component';

describe('BidsAreaComponent', () => {
  let component: BidsAreaComponent;
  let fixture: ComponentFixture<BidsAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BidsAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BidsAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
