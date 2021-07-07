import { Component, Input, OnInit } from '@angular/core';
import { TvShowService } from '../../services/TheMovieDB/tv-show.service';
import { ActivatedRoute, Params } from '@angular/router';
import { MovieService } from '../../services/TheMovieDB/movie.service';
import { IMovie } from '../../models/TheMovieDB/movie';
import { ITvShowResults } from '../../models/TheMovieDB/tv-result';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  tvShows: ITvShowResults[];
  movies: IMovie[];

  constructor(private tvShowService: TvShowService,
              private movieService: MovieService,
              private router: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.router.params.subscribe((params: Params) => {
      const keyWords = params.search;
      this.search(keyWords);
    });
  }

  search(keyWords): void {
    this.tvShowService.searchTvShows(keyWords).subscribe(res => {
      this.tvShows = res.results;
    });
    this.movieService.searchMovies(keyWords).subscribe(res => {
      this.movies = res.results;
    });
  }

}
