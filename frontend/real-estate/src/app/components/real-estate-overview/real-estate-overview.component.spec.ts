import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealEstateOverviewComponent } from './real-estate-overview.component';

describe('RealEstateOverviewComponent', () => {
  let component: RealEstateOverviewComponent;
  let fixture: ComponentFixture<RealEstateOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealEstateOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RealEstateOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
