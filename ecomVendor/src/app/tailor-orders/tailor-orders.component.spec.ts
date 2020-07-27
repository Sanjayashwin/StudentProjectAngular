import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TailorOrdersComponent } from './tailor-orders.component';

describe('TailorOrdersComponent', () => {
  let component: TailorOrdersComponent;
  let fixture: ComponentFixture<TailorOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TailorOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TailorOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
