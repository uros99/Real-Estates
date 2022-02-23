import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRealEstateTabComponent } from './add-real-estate-tab.component';

describe('AddRealEstateTabComponent', () => {
  let component: AddRealEstateTabComponent;
  let fixture: ComponentFixture<AddRealEstateTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRealEstateTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRealEstateTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
