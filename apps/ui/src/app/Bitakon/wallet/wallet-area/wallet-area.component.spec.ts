import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletAreaComponent } from './wallet-area.component';

describe('WalletAreaComponent', () => {
  let component: WalletAreaComponent;
  let fixture: ComponentFixture<WalletAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WalletAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WalletAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
