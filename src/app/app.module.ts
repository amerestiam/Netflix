import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { TvComponent } from './components/tv/tv.component';
import { MoviesComponent } from './components/movies/movies.component';
import { LatestComponent } from './components/latest/latest.component';
import { ListComponent } from './components/list/list.component';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { CarouselModule } from 'primeng/carousel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SliderComponent } from './components/slider/slider.component';
import { MoviesDetailsComponent } from './components/movies-details/movies-details.component';
import { TvDetailsComponent } from './components/tv-details/tv-details.component';
import { TableModule } from 'primeng/table';
import { MovieDialogComponent } from './components/movies-details/movie-dialog/movie-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { TvDialogComponent } from './components/tv-details/tv-dialog/tv-dialog.component';
import { OffLineComponent } from './components/home/off-line/off-line.component';
import { GenreListComponent } from './components/genre-list/genre-list.component';
import { GenreMovieComponent } from './components/genre-list/genre-movie/genre-movie.component';
import { GenreTvComponent } from './components/genre-list/genre-tv/genre-tv.component';
import { FormsModule } from '@angular/forms';
import { SearchResultsComponent } from './components/search-results/search-results.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    TvComponent,
    MoviesComponent,
    LatestComponent,
    ListComponent,
    SliderComponent,
    MoviesDetailsComponent,
    TvDetailsComponent,
    MovieDialogComponent,
    TvDialogComponent,
    OffLineComponent,
    GenreListComponent,
    GenreMovieComponent,
    GenreTvComponent,
    SearchResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    CarouselModule,
    TableModule,
    MatDialogModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
