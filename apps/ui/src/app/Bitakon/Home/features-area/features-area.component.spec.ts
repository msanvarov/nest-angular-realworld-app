import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesAreaComponent } from './features-area.component';

describe('FeaturesAreaComponent', () => {
  let component: FeaturesAreaComponent;
  let fixture: ComponentFixture<FeaturesAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturesAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturesAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
