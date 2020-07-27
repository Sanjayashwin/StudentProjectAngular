import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDesignPatternComponent } from './add-design-pattern.component';

describe('AddDesignPatternComponent', () => {
  let component: AddDesignPatternComponent;
  let fixture: ComponentFixture<AddDesignPatternComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDesignPatternComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDesignPatternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
