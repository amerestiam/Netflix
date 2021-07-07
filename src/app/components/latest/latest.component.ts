import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/TheMovieDB/movie.service';
import { TvShowService } from '../../services/TheMovieDB/tv-show.service';
import { ITvShow } from '../../models/TheMovieDB/tv-show';
import { IMovie } from '../../models/TheMovieDB/movie';

@Component({
  selector: 'app-latest',
  templateUrl: './latest.component.html',
  styleUrls: ['./latest.component.css']
})
export class LatestComponent implements OnInit {
  show: ITvShow = null;
  movie: IMovie = null;

  constructor(private moviesService: MovieService, private showService: TvShowService) {
  }

  ngOnInit(): void {
    this.moviesService.getLatestMovie().subscribe(movie => this.movie = movie);
    this.showService.getLatestTvShow().subscribe(show => this.show = show);
  }

}
