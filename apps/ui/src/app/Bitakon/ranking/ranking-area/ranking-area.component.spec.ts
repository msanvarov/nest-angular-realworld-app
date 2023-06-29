import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingAreaComponent } from './ranking-area.component';

describe('RankingAreaComponent', () => {
  let component: RankingAreaComponent;
  let fixture: ComponentFixture<RankingAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RankingAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RankingAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
