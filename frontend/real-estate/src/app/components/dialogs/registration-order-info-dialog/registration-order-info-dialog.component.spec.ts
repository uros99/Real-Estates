import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationOrderInfoDialogComponent } from './registration-order-info-dialog.component';

describe('RegistrationOrderInfoDialogComponent', () => {
  let component: RegistrationOrderInfoDialogComponent;
  let fixture: ComponentFixture<RegistrationOrderInfoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationOrderInfoDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationOrderInfoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
