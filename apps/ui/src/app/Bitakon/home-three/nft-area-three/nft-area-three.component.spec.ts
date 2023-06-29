import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NftAreaThreeComponent } from './nft-area-three.component';

describe('NftAreaThreeComponent', () => {
  let component: NftAreaThreeComponent;
  let fixture: ComponentFixture<NftAreaThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NftAreaThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NftAreaThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
