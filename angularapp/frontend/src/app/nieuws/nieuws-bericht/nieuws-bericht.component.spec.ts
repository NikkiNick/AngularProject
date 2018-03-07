import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NieuwsBerichtComponent } from './nieuws-bericht.component';

describe('NieuwsBerichtComponent', () => {
  let component: NieuwsBerichtComponent;
  let fixture: ComponentFixture<NieuwsBerichtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NieuwsBerichtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NieuwsBerichtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
