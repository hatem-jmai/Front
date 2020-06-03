import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutecadreComponent } from './ajoutecadre.component';

describe('AjoutecadreComponent', () => {
  let component: AjoutecadreComponent;
  let fixture: ComponentFixture<AjoutecadreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutecadreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutecadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
