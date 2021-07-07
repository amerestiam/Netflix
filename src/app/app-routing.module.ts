import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LatestComponent } from './components/latest/latest.component';
import { TvComponent } from './components/tv/tv.component';
import { MoviesComponent } from './components/movies/movies.component';
import { ListComponent } from './components/list/list.component';
import { MoviesDetailsComponent } from './components/movies-details/movies-details.component';
import { TvDetailsComponent } from './components/tv-details/tv-details.component';
import { OffLineComponent } from './components/home/off-line/off-line.component';
import { GenreListComponent } from './components/genre-list/genre-list.component';
import { GenreMovieComponent } from './components/genre-list/genre-movie/genre-movie.component';
import { GenreTvComponent } from './components/genre-list/genre-tv/genre-tv.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';

const routes: Routes = [
  {path: '', component: OffLineComponent},
  {path: 'home', component: HomeComponent},
  {path: 'tv', component: TvComponent},
  {path: 'genre', component: GenreListComponent},
  {path: 'genre-movie/:id/:name', component: GenreMovieComponent},
  {path: 'genre-tv/:id/:name', component: GenreTvComponent},
  {path: 'tv-details/:id', component: TvDetailsComponent},
  {path: 'movies', component: MoviesComponent},
  {path: 'movies-details/:id', component: MoviesDetailsComponent},
  {path: 'latest', component: LatestComponent},
  {path: 'list', component: ListComponent},
  {path: 'search/:search', component: SearchResultsComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
