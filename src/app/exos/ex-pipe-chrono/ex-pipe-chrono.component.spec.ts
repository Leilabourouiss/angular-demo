import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExPipeChronoComponent } from './ex-pipe-chrono.component';

describe('ExPipeChronoComponent', () => {
  let component: ExPipeChronoComponent;
  let fixture: ComponentFixture<ExPipeChronoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExPipeChronoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExPipeChronoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
