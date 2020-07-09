import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BorderouComponent } from './borderou.component';

describe('BorderouComponent', () => {
  let component: BorderouComponent;
  let fixture: ComponentFixture<BorderouComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorderouComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorderouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
