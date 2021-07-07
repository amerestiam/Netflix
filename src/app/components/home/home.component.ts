import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs/operators';
import { MovieService } from '../../services/TheMovieDB/movie.service';
import { TvShowService } from '../../services/TheMovieDB/tv-show.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  nowPlaying: any;
  tvShows: any;
  loader = true;

  constructor(
    private movies: MovieService,
    private tv: TvShowService
  ) {
  }

  ngOnInit(): void {
    this.trendingMovies(1);
    this.tvShow(1);
  }

  trendingMovies(page: number): void {
    this.movies.getNowPlaying(page).pipe(delay(2000)).subscribe((res: any) => {
      this.nowPlaying = res.results;
      this.loader = false;
    });
  }

  tvShow(page: number): void {
    this.tv.getCurrentlyAiringTvShows().pipe(delay(2000)).subscribe((res: any) => {
      this.tvShows = res.results;
      this.loader = false;
    });
  }

}
