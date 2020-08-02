import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCatlogComponent } from './manage-catlog.component';

describe('ManageCatlogComponent', () => {
  let component: ManageCatlogComponent;
  let fixture: ComponentFixture<ManageCatlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageCatlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageCatlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
