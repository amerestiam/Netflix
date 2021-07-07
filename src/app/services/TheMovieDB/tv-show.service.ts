import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { ITheMovieDB } from './the-movie-db';

import { ISearchTvResults } from '../../models/TheMovieDB/search-tv-results';
import { ITvShow } from '../../models/TheMovieDB/tv-show';
import { ITvEpisode } from '../../models/TheMovieDB/tv-episode';
import { ITvSeason } from '../../models/TheMovieDB/tv-season';

@Injectable({
  providedIn: 'root'
})
export class TvShowService extends ITheMovieDB {

  constructor(private http: HttpClient) {
    super();
  }

  searchTvShows(keyWords: string, page?: number): Observable<ISearchTvResults> {
    const url = `${this.apiUrl}/search/tv`;
    const params = this.createParams({
      query: keyWords,
      page: String(page || 1),
    });

    return this.http.get<ISearchTvResults>(url, {params})
      .pipe(
        tap(res => {
          console.log(`Search TV shows with '${keyWords}' results: ${JSON.stringify(res)}`);
          res.results.map(result => result.genres = result.genre_ids);
        }),
        catchError(this.handleError<ISearchTvResults>('searchTvShow()'))
      );
  }

  getTVShowByGenre(id: string): Observable<any> {
    const url = `${this.apiUrl}/discover/tv`;
    const params = this.createParams();

    return this.http.get<ITvShow>(url, {params})
      .pipe(
        tap(res => console.log(`Get TV show ${id}: ${JSON.stringify(res)}`)),
        catchError(this.handleError<ITvShow>('getTvShow()'))
      );
  }

  getGenres(): Observable<any> {
    const url = `${this.apiUrl}/genre/tv/list`;
    const params = this.createParams();

    return this.http.get(url, {params})
      .pipe(
        tap(res => console.log(`Get TV show : ${JSON.stringify(res)}`)),
        catchError(this.handleError<ITvShow>('getTvShow()'))
      );
  }


  getTvShow(id: number): Observable<ITvShow> {
    const url = `${this.apiUrl}/tv/${id}`;
    const params = this.createParams();

    return this.http.get<ITvShow>(url, {params})
      .pipe(
        tap(res => console.log(`Get TV show ${id}: ${JSON.stringify(res)}`)),
        catchError(this.handleError<ITvShow>('getTvShow()'))
      );
  }

  getLatestTvShow(): Observable<ITvShow> {
    const url = `${this.apiUrl}/tv/latest`;
    const params = this.createParams();

    return this.http.get<ITvShow>(url, {params})
      .pipe(
        tap(res => console.log(`Get latest TV show: ${JSON.stringify(res)}`)),
        catchError(this.handleError<ITvShow>('getLatestTvShow()'))
      );
  }

  getMostPopularTvShows(): Observable<ISearchTvResults> {
    const url = `${this.apiUrl}/tv/popular`;
    const params = this.createParams();

    return this.http.get<ISearchTvResults>(url, {params})
      .pipe(
        tap(res => console.log(`Get most popular TV shows: ${JSON.stringify(res)}`)),
        catchError(this.handleError<ISearchTvResults>('getMostPopularTvShows()'))
      );
  }

  getCurrentlyAiringTvShows(): Observable<ISearchTvResults> {
    const url = `${this.apiUrl}/tv/on_the_air`;
    const params = this.createParams();

    return this.http.get<ISearchTvResults>(url, {params})
      .pipe(
        tap(res => console.log(`Get currently airing TV shows: ${JSON.stringify(res)}`)),
        catchError(this.handleError<ISearchTvResults>('getCurrentlyAiringTvShows()'))
      );
  }

  getTvSeasonDetails(id: number, season: number): Observable<ITvSeason> {
    const url = `${this.apiUrl}/tv/${id}/season/${season}`;
    const params = this.createParams();

    return this.http.get<ITvSeason>(url, {params})
      .pipe(
        tap(res => console.log(`Get details for S${season} for TV show ${id}: ${JSON.stringify(res)}`)),
        catchError(this.handleError<ITvSeason>('getTvSeasonDetails()'))
      );
  }

  getTvEpisodeDetails(id: number, season: number, episode: number): Observable<ITvEpisode> {
    const url = `${this.apiUrl}/tv/${id}/season/${season}/episode/${episode}`;
    const params = this.createParams();

    return this.http.get<ITvEpisode>(url, {params})
      .pipe(
        tap(res => console.log(`Get details for S${season} E${episode} for TV Show ${id}: ${JSON.stringify(res)}`)),
        catchError(this.handleError<ITvEpisode>('getTvEpisodeDetails()'))
      );
  }

  getTvVideos(id: any): Observable<any> {
    const url = `${this.apiUrl}/tv/${id}/videos`;
    const params = this.createParams();

    return this.http.get<ISearchTvResults>(url, {params})
      .pipe(
        tap(res => console.log(`Get currently airing TV shows: ${JSON.stringify(res)}`)),
        catchError(this.handleError<ISearchTvResults>('getCurrentlyAiringTvShows()'))
      );
  }

  getTvBackdropsImages(id: string): Observable<any> {
    const url = `${this.apiUrl}/tv/${id}/images`;
    const params = this.createParams();

    return this.http.get<ISearchTvResults>(url, {params})
      .pipe(
        tap(res => console.log(`Get currently airing TV shows: ${JSON.stringify(res)}`)),
        catchError(this.handleError<ISearchTvResults>('getCurrentlyAiringTvShows()'))
      );
  }

  getMovieCredits(id: string): Observable<any> {
    const url = `${this.apiUrl}/tv/${id}/credits`;
    const params = this.createParams();

    return this.http.get<ISearchTvResults>(url, {params})
      .pipe(
        tap(res => console.log(`Get currently airing TV shows: ${JSON.stringify(res)}`)),
        catchError(this.handleError<ISearchTvResults>('getCurrentlyAiringTvShows()'))
      );
  }

  getRecomendTv(id: string): Observable<any> {
    const url = `${this.apiUrl}/tv/${id}/recommendations`;
    const params = this.createParams();

    return this.http.get<ISearchTvResults>(url, {params})
      .pipe(
        tap(res => console.log(`Get currently airing TV shows: ${JSON.stringify(res)}`)),
        catchError(this.handleError<ISearchTvResults>('getCurrentlyAiringTvShows()'))
      );
  }
}
