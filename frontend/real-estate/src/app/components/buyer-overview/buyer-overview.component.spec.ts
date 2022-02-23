import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerOverviewComponent } from './buyer-overview.component';

describe('BuyerOverviewComponent', () => {
  let component: BuyerOverviewComponent;
  let fixture: ComponentFixture<BuyerOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyerOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyerOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
