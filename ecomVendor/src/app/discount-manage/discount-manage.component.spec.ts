import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountManageComponent } from './discount-manage.component';

describe('DiscountManageComponent', () => {
  let component: DiscountManageComponent;
  let fixture: ComponentFixture<DiscountManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscountManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscountManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
