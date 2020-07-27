import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseMeasureMentComponent } from './choose-measure-ment.component';

describe('ChooseMeasureMentComponent', () => {
  let component: ChooseMeasureMentComponent;
  let fixture: ComponentFixture<ChooseMeasureMentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseMeasureMentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseMeasureMentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
