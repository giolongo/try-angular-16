import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TvShowsComponent } from './components/tv-shows/tv-shows.component';

import {HttpClientModule} from '@angular/common/http';
import { TvShowComponent } from './components/tv-show/tv-show.component';
import {MatCardModule} from '@angular/material/card';

const routes: Routes = [
  { path: '',   component: TvShowsComponent }
];


@NgModule({
  declarations: [
    TvShowsComponent,
    TvShowComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    MatCardModule,
    RouterModule.forChild(routes)
  ]
})
export class TvShowsModule { }
