import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionAreaTwoComponent } from './collection-area-two.component';

describe('CollectionAreaTwoComponent', () => {
  let component: CollectionAreaTwoComponent;
  let fixture: ComponentFixture<CollectionAreaTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectionAreaTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionAreaTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
