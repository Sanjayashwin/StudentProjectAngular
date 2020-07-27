import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerpostOrderComponent } from './customerpost-order.component';

describe('CustomerpostOrderComponent', () => {
  let component: CustomerpostOrderComponent;
  let fixture: ComponentFixture<CustomerpostOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerpostOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerpostOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
