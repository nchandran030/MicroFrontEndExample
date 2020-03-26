import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedViewComponent } from './nested-view.component';

describe('NestedViewComponent', () => {
  let component: NestedViewComponent;
  let fixture: ComponentFixture<NestedViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NestedViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
