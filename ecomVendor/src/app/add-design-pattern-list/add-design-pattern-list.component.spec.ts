import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDesignPatternListComponent } from './add-design-pattern-list.component';

describe('AddDesignPatternListComponent', () => {
  let component: AddDesignPatternListComponent;
  let fixture: ComponentFixture<AddDesignPatternListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDesignPatternListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDesignPatternListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
