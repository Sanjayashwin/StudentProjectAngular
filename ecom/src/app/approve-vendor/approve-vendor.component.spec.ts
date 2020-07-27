import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveVendorComponent } from './approve-vendor.component';

describe('ApproveVendorComponent', () => {
  let component: ApproveVendorComponent;
  let fixture: ComponentFixture<ApproveVendorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApproveVendorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveVendorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
