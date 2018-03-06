import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NieuwsOverzichtComponent } from './nieuws-overzicht.component';

describe('NieuwsOverzichtComponent', () => {
  let component: NieuwsOverzichtComponent;
  let fixture: ComponentFixture<NieuwsOverzichtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NieuwsOverzichtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NieuwsOverzichtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
