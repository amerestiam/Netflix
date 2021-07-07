import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { ITheMovieDB } from './the-movie-db';

import { ISearchGenreResults } from '../../models/TheMovieDB/search-genre-results';


@Injectable({
  providedIn: 'root'
})
export class GenreService extends ITheMovieDB {
  constructor(private httpClient: HttpClient) {
    super();
  }

  getMoviesGenres(): Observable<ISearchGenreResults> {
    const url = `${this.apiUrl}/genre/movie/list`;
    const params = this.createParams();

    return this.httpClient.get<ISearchGenreResults>(url, { params, })
      .pipe(
        tap(res => console.log(`Search movies genres: ${JSON.stringify(res)}`)),
        catchError(this.handleError<ISearchGenreResults>('getMoviesGenres()'))
      );
  }

  getTvShowsGenres(): Observable<ISearchGenreResults> {
    const url = `${this.apiUrl}/genre/tv/list`;
    const params = this.createParams();

    return this.httpClient.get<ISearchGenreResults>(url, { params, })
      .pipe(
        tap(res => console.log(`Search TV shows genres: ${JSON.stringify(res)}`)),
        catchError(this.handleError<ISearchGenreResults>('getTvShowsGenres()'))
      );
  }
}
