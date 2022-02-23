import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportRealEstateTabComponent } from './import-real-estate-tab.component';

describe('ImportRealEstateTabComponent', () => {
  let component: ImportRealEstateTabComponent;
  let fixture: ComponentFixture<ImportRealEstateTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportRealEstateTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportRealEstateTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
