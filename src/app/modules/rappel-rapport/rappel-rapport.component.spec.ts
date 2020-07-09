import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RappelRapportComponent } from './rappel-rapport.component';

describe('RappelRapportComponent', () => {
  let component: RappelRapportComponent;
  let fixture: ComponentFixture<RappelRapportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RappelRapportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RappelRapportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
