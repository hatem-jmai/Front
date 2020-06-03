import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeCadreComponent } from './liste-cadre.component';

describe('ListeCadreComponent', () => {
  let component: ListeCadreComponent;
  let fixture: ComponentFixture<ListeCadreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeCadreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeCadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
