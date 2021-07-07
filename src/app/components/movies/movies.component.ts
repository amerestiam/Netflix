import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs/operators';
import { MovieService } from '../../services/TheMovieDB/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  upComing: any;
  loader = true;
  totalResults: any;
  nowPlaying: any;

  constructor(private movieService: MovieService) {
  }

  ngOnInit(): void {
    this.trendingMovies(1);
    this.getUpComingMovies();
  }

  trendingMovies(page: number): void {
    this.movieService.getNowPlaying(page).pipe(delay(2000)).subscribe((res: any) => {
      this.nowPlaying = res.results;
      this.loader = false;
    });
  }

  getUpComingMovies(): void {
    this.movieService.getUpcomingMovies().pipe(delay(2000)).subscribe((res: any) => {
        this.upComing = res.results;
        this.totalResults = res.total_results;
        this.loader = false;
      },
      error => console.log(error));
  }
}
