import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoseDossierComponent } from './chose-dossier.component';

describe('ChoseDossierComponent', () => {
  let component: ChoseDossierComponent;
  let fixture: ComponentFixture<ChoseDossierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoseDossierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoseDossierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
