import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionMainComponent } from './collection-main.component';

describe('CollectionMainComponent', () => {
  let component: CollectionMainComponent;
  let fixture: ComponentFixture<CollectionMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectionMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
