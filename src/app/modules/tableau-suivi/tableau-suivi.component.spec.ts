import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableauSuiviComponent } from './tableau-suivi.component';

describe('TableauSuiviComponent', () => {
  let component: TableauSuiviComponent;
  let fixture: ComponentFixture<TableauSuiviComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableauSuiviComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableauSuiviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
