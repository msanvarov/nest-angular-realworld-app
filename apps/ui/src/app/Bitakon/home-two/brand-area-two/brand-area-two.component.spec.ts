import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandAreaTwoComponent } from './brand-area-two.component';

describe('BrandAreaTwoComponent', () => {
  let component: BrandAreaTwoComponent;
  let fixture: ComponentFixture<BrandAreaTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandAreaTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandAreaTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
