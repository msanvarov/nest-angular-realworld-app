import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionGridTwoMainComponent } from './collection-grid-two-main.component';

describe('CollectionGridTwoMainComponent', () => {
  let component: CollectionGridTwoMainComponent;
  let fixture: ComponentFixture<CollectionGridTwoMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectionGridTwoMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionGridTwoMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
