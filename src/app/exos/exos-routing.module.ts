import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExPipeChronoComponent } from './ex-pipe-chrono/ex-pipe-chrono.component';
import { ExPipeSpoilerComponent } from './ex-pipe-spoiler/ex-pipe-spoiler.component';
import { Ex4MenuComponent } from './ex4-menu/ex4-menu.component';
import { Exo1Component } from './exo1/exo1.component';
import { Exo5CoursComponent } from './exo5-cours/exo5-cours.component';

const routes: Routes = [
  { path: 'ex-pipe-chrono', component: ExPipeChronoComponent},
  { path: 'ex-pipe-spoiler', component: ExPipeSpoilerComponent},
  { path: 'ex4-menu', component: Ex4MenuComponent},
  { path: 'exo1', component: Exo1Component},
  { path: 'exo5-cours', component: Exo5CoursComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExosRoutingModule { }
