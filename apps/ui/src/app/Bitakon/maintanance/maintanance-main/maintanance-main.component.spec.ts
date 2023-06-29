import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintananceMainComponent } from './maintanance-main.component';

describe('MaintananceMainComponent', () => {
  let component: MaintananceMainComponent;
  let fixture: ComponentFixture<MaintananceMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaintananceMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintananceMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
