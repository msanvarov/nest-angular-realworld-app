import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionsThreeComponent } from './collections-three.component';

describe('CollectionsThreeComponent', () => {
  let component: CollectionsThreeComponent;
  let fixture: ComponentFixture<CollectionsThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectionsThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionsThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
