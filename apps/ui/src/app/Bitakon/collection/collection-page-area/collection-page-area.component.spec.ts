import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionPageAreaComponent } from './collection-page-area.component';

describe('CollectionPageAreaComponent', () => {
  let component: CollectionPageAreaComponent;
  let fixture: ComponentFixture<CollectionPageAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectionPageAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionPageAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
