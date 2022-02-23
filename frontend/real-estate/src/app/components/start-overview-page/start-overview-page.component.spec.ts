import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartOverviewPageComponent } from './start-overview-page.component';

describe('StartOverviewPageComponent', () => {
  let component: StartOverviewPageComponent;
  let fixture: ComponentFixture<StartOverviewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartOverviewPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartOverviewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
