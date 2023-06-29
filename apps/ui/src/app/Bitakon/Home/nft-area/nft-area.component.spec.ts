import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NftAreaComponent } from './nft-area.component';

describe('NftAreaComponent', () => {
  let component: NftAreaComponent;
  let fixture: ComponentFixture<NftAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NftAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NftAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
