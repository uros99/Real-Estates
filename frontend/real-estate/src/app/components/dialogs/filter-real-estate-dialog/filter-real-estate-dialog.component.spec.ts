import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterRealEstateDialogComponent } from './filter-real-estate-dialog.component';

describe('FilterRealEstateDialogComponent', () => {
  let component: FilterRealEstateDialogComponent;
  let fixture: ComponentFixture<FilterRealEstateDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterRealEstateDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterRealEstateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
