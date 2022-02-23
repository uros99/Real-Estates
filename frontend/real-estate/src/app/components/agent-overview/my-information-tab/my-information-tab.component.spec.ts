import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyInformationTabComponent } from './my-information-tab.component';

describe('MyInformationTabComponent', () => {
  let component: MyInformationTabComponent;
  let fixture: ComponentFixture<MyInformationTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyInformationTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyInformationTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
