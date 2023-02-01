import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Demo1Component } from './demos/demo1/demo1.component';
import { Exo1Component } from './exos/exo1/exo1.component';
import { InputComponent } from './exos/exo1/input/input.component';
import { InfoUserComponent } from './exos/exo1/info-user/info-user.component';
import { Demo2Component } from './demos/demo2/demo2.component';
import { Demo3Component } from './demos/demo3/demo3.component';
import { ToTemperature } from './demos/pipes/to-temperature.pipe';
import { ChronoPipe } from './exos/ex-pipe-chrono/pipe/chrono.pipe';
import { ExPipeChronoComponent } from './exos/ex-pipe-chrono/ex-pipe-chrono.component';

@NgModule({
  declarations: [
    AppComponent,
    Demo1Component,
    Exo1Component,
    InputComponent,
    InfoUserComponent,
    Demo2Component,
    Demo3Component,
    ToTemperature,
    ChronoPipe,
    ExPipeChronoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
