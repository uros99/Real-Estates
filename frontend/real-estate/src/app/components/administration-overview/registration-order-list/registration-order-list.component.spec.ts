import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationOrderListComponent } from './registration-order-list.component';

describe('RegistrationOrderListComponent', () => {
  let component: RegistrationOrderListComponent;
  let fixture: ComponentFixture<RegistrationOrderListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationOrderListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationOrderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
