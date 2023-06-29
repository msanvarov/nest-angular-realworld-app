import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarqueTextAreaComponent } from './marque-text-area.component';

describe('MarqueTextAreaComponent', () => {
  let component: MarqueTextAreaComponent;
  let fixture: ComponentFixture<MarqueTextAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarqueTextAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarqueTextAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
