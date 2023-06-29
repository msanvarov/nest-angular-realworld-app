import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionGridAreaComponent } from './collection-grid-area.component';

describe('CollectionGridAreaComponent', () => {
  let component: CollectionGridAreaComponent;
  let fixture: ComponentFixture<CollectionGridAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectionGridAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionGridAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
