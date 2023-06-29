import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportFeatureAreaComponent } from './support-feature-area.component';

describe('SupportFeatureAreaComponent', () => {
  let component: SupportFeatureAreaComponent;
  let fixture: ComponentFixture<SupportFeatureAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupportFeatureAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportFeatureAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
