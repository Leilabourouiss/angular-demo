import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex4MenuComponent } from './ex4-menu.component';

describe('Ex4MenuComponent', () => {
  let component: Ex4MenuComponent;
  let fixture: ComponentFixture<Ex4MenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex4MenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ex4MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
