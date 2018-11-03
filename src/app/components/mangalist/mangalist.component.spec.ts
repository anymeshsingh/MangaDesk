import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MangalistComponent } from './mangalist.component';

describe('MangalistComponent', () => {
  let component: MangalistComponent;
  let fixture: ComponentFixture<MangalistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MangalistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MangalistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
