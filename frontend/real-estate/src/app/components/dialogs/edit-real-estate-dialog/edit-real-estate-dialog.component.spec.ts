import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRealEstateDialogComponent } from './edit-real-estate-dialog.component';

describe('EditRealEstateDialogComponent', () => {
  let component: EditRealEstateDialogComponent;
  let fixture: ComponentFixture<EditRealEstateDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditRealEstateDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRealEstateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
