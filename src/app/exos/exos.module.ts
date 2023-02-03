import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExosRoutingModule } from './exos-routing.module';
import { Exo1Component } from './exo1/exo1.component';
import { Exo5CoursComponent } from './exo5-cours/exo5-cours.component';
import { Ex4MenuComponent } from './ex4-menu/ex4-menu.component';
import { ExPipeChronoComponent } from './ex-pipe-chrono/ex-pipe-chrono.component';
import { ExPipeSpoilerComponent } from './ex-pipe-spoiler/ex-pipe-spoiler.component';
import { FormsModule } from '@angular/forms';
import { InfoUserComponent } from './exo1/info-user/info-user.component';
import { InputComponent } from './exo1/input/input.component';
import { ChronoPipe } from './ex-pipe-chrono/pipe/chrono.pipe';


@NgModule({
  declarations: [
    Exo1Component,
    Exo5CoursComponent,
    Ex4MenuComponent,
    ExPipeChronoComponent,
    ExPipeSpoilerComponent,
    ExPipeChronoComponent,
    ChronoPipe,
    InfoUserComponent,
    InputComponent
  ],
  imports: [
    CommonModule,
    ExosRoutingModule,
    FormsModule
  ]
})
export class ExosModule { }
