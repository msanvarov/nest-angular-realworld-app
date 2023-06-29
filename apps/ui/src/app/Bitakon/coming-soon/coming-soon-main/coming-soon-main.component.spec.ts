import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComingSoonMainComponent } from './coming-soon-main.component';

describe('ComingSoonMainComponent', () => {
  let component: ComingSoonMainComponent;
  let fixture: ComponentFixture<ComingSoonMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComingSoonMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComingSoonMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
