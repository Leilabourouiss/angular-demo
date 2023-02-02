import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exo5CoursComponent } from './exo5-cours.component';

describe('Exo5CoursComponent', () => {
  let component: Exo5CoursComponent;
  let fixture: ComponentFixture<Exo5CoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Exo5CoursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exo5CoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
