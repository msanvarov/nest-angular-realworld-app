import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionGridMainComponent } from './collection-grid-main.component';

describe('CollectionGridMainComponent', () => {
  let component: CollectionGridMainComponent;
  let fixture: ComponentFixture<CollectionGridMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectionGridMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionGridMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
