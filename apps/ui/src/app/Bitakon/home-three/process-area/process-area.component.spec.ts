import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessAreaComponent } from './process-area.component';

describe('ProcessAreaComponent', () => {
  let component: ProcessAreaComponent;
  let fixture: ComponentFixture<ProcessAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
