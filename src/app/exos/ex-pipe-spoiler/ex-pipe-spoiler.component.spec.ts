import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExPipeSpoilerComponent } from './ex-pipe-spoiler.component';

describe('ExPipeSpoilerComponent', () => {
  let component: ExPipeSpoilerComponent;
  let fixture: ComponentFixture<ExPipeSpoilerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExPipeSpoilerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExPipeSpoilerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
