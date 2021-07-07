import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ITheMovieDB } from './the-movie-db';

import { ISearchMovieResults } from '../../models/TheMovieDB/search-movie-results';
import { catchError, tap } from 'rxjs/operators';
import { IMovie } from '../../models/TheMovieDB/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService extends ITheMovieDB {

  constructor(private http: HttpClient) {
    super();
  }

  searchMovies(keyWords: string, page?: number): Observable<ISearchMovieResults> {
    const url = `${this.apiUrl}/search/movie`;
    const params = this.createParams({
      query: keyWords,
      page: String(page || 1),
    });

    return this.http.get<ISearchMovieResults>(url, {params})
      .pipe(
        tap(res => console.log(`Search movies with '${keyWords}' results: ${JSON.stringify(res)}`)),
        catchError(this.handleError<ISearchMovieResults>('searchMovies()'))
      );
  }

  getGenres(): Observable<any> {
    const url = `${this.apiUrl}/genre/movie/list`;
    const params = this.createParams();

    return this.http.get(url, {params})
      .pipe(
        tap(res => console.log(`Get movie : ${JSON.stringify(res)}`)),
        catchError(this.handleError<IMovie>('getMovie()'))
      );
  }

  getMoviesByGenre(id: string): Observable<IMovie> {
    const url = `${this.apiUrl}/genre/${id}/movies`;
    const params = this.createParams();

    return this.http.get<IMovie>(url, {params})
      .pipe(
        tap(res => console.log(`Get movie by genre : ${JSON.stringify(res)}`)),
        catchError(this.handleError<IMovie>('getMovie()'))
      );
  }

  getMovie(id: number): Observable<IMovie> {
    const url = `${this.apiUrl}/movie/${id}`;
    const params = this.createParams();

    return this.http.get<IMovie>(url, {params})
      .pipe(
        tap(res => console.log(`Get movie ${id}: ${JSON.stringify(res)}`)),
        catchError(this.handleError<IMovie>('getMovie()'))
      );
  }

  getLatestMovie(): Observable<IMovie> {
    const url = `${this.apiUrl}/movie/latest`;
    const params = this.createParams();

    return this.http.get<IMovie>(url, {params})
      .pipe(
        tap(res => console.log(`Get latest movie: ${JSON.stringify(res)}`)),
        catchError(this.handleError<IMovie>('getLatestMovie()'))
      );
  }

  getMostPopularMovies(): Observable<ISearchMovieResults> {
    const url = `${this.apiUrl}/movie/popular`;
    const params = this.createParams();

    return this.http.get<ISearchMovieResults>(url, {params})
      .pipe(
        tap(res => console.log(`Get most popular movies: ${JSON.stringify(res)}`)),
        catchError(this.handleError<ISearchMovieResults>('getMostPopularMovies()'))
      );
  }

  getUpcomingMovies(): Observable<ISearchMovieResults> {
    const url = `${this.apiUrl}/movie/upcoming`;
    const params = this.createParams();

    return this.http.get<ISearchMovieResults>(url, {params})
      .pipe(
        tap(res => console.log(`Get upcoming movies: ${JSON.stringify(res)}`)),
        catchError(this.handleError<ISearchMovieResults>('getUpcomingMovies()'))
      );
  }

  getNowPlaying(page: number): Observable<any> {
    const url = `${this.apiUrl}/movie/now_playing`;
    const params = this.createParams({
      page,
    });

    return this.http.get(url, {params})
      .pipe(
        tap(res => console.log(`Get now playing: ${JSON.stringify(res)}`)),
        catchError(this.handleError('getNowPlaying()'))
      );
  }

  getMovieCredits(id: string): Observable<any> {
    const url = `${this.apiUrl}/movie/${id}/credits`;
    const params = this.createParams();

    return this.http.get<ISearchMovieResults>(url, {params})
      .pipe(
        tap(res => console.log(`Get upcoming movies: ${JSON.stringify(res)}`)),
        catchError(this.handleError<ISearchMovieResults>('getMovieCredits()'))
      );
  }

  getBackdropsImages(id: string): Observable<any> {
    const url = `${this.apiUrl}/movie/${id}/images`;
    const params = this.createParams();

    return this.http.get<ISearchMovieResults>(url, {params})
      .pipe(
        tap(res => console.log(`Get upcoming movies: ${JSON.stringify(res)}`)),
        catchError(this.handleError<ISearchMovieResults>('getBackdropsImages()'))
      );
  }

  getMovieVideos(id: any): Observable<any> {
    const url = `${this.apiUrl}/movie/${id}/videos`;
    const params = this.createParams();

    return this.http.get<ISearchMovieResults>(url, {params})
      .pipe(
        tap(res => console.log(`Get upcoming movies: ${JSON.stringify(res)}`)),
        catchError(this.handleError<ISearchMovieResults>('getMovieVideos()'))
      );
  }

  getRecomendMovies(id: string): Observable<any> {
    const url = `${this.apiUrl}/movie/${id}/recommendations`;
    const params = this.createParams();

    return this.http.get<ISearchMovieResults>(url, {params})
      .pipe(
        tap(res => console.log(`Get upcoming movies: ${JSON.stringify(res)}`)),
        catchError(this.handleError<ISearchMovieResults>('getRecomendedMovies()'))
      );
  }
}
