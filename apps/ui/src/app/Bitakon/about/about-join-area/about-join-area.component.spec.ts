import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutJoinAreaComponent } from './about-join-area.component';

describe('AboutJoinAreaComponent', () => {
  let component: AboutJoinAreaComponent;
  let fixture: ComponentFixture<AboutJoinAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutJoinAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutJoinAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
