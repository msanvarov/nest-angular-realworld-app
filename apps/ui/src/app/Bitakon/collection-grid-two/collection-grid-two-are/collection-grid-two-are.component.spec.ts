import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionGridTwoAreComponent } from './collection-grid-two-are.component';

describe('CollectionGridTwoAreComponent', () => {
  let component: CollectionGridTwoAreComponent;
  let fixture: ComponentFixture<CollectionGridTwoAreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectionGridTwoAreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionGridTwoAreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
