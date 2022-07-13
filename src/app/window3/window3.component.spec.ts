import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Window3Component } from './window3.component';

describe('Window3Component', () => {
  let component: Window3Component;
  let fixture: ComponentFixture<Window3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Window3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Window3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
