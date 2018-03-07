import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNieuwsBerichtComponent } from './add-nieuws-bericht.component';

describe('AddNieuwsBerichtComponent', () => {
  let component: AddNieuwsBerichtComponent;
  let fixture: ComponentFixture<AddNieuwsBerichtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNieuwsBerichtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNieuwsBerichtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
