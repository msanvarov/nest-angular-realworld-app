import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionAreaComponent } from './collection-area.component';

describe('CollectionAreaComponent', () => {
  let component: CollectionAreaComponent;
  let fixture: ComponentFixture<CollectionAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectionAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
