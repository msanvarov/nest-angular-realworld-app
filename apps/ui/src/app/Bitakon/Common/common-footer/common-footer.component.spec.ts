import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonFooterComponent } from './common-footer.component';

describe('CommonFooterComponent', () => {
  let component: CommonFooterComponent;
  let fixture: ComponentFixture<CommonFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommonFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
