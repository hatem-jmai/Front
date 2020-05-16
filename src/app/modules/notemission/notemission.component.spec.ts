import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotemissionComponent } from './notemission.component';

describe('NotemissionComponent', () => {
  let component: NotemissionComponent;
  let fixture: ComponentFixture<NotemissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotemissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotemissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
