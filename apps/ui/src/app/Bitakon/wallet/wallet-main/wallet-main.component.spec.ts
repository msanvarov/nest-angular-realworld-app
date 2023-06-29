import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletMainComponent } from './wallet-main.component';

describe('WalletMainComponent', () => {
  let component: WalletMainComponent;
  let fixture: ComponentFixture<WalletMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WalletMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WalletMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
