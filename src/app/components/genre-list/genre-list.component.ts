import { Component, OnInit } from '@angular/core';
import {MovieService} from '../../services/TheMovieDB/movie.service';
import {delay} from 'rxjs/operators';
import {TvShowService} from '../../services/TheMovieDB/tv-show.service';

@Component({
  selector: 'app-genre-list',
  templateUrl: './genre-list.component.html',
  styleUrls: ['./genre-list.component.css']
})
export class GenreListComponent implements OnInit {
  genreslist: any;
  loader = true;

  constructor(
    private moviesService: MovieService,
    private tvShowService: TvShowService
  ) { }

  ngOnInit(): void {
    this.MovieGenre();
    this.TvGenre();
  }

  MovieGenre(): void {
    this.moviesService.getGenres().pipe(delay(2000)).subscribe((res: any) => {
      this.genreslist = res.genres;
      this.loader = false;
    });
  }

  TvGenre(): void {
    this.tvShowService.getGenres().pipe(delay(2000)).subscribe((res: any) => {
      this.genreslist = res.genres;
      this.loader = false;
    });
  }

}
