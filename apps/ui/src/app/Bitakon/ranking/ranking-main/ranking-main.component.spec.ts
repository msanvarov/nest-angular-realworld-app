import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingMainComponent } from './ranking-main.component';

describe('RankingMainComponent', () => {
  let component: RankingMainComponent;
  let fixture: ComponentFixture<RankingMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RankingMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RankingMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
