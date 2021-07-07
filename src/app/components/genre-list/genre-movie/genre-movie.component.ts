import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {MovieService} from '../../../services/TheMovieDB/movie.service';
import {delay} from 'rxjs/operators';
import {IMovie} from '../../../models/TheMovieDB/movie';

@Component({
  selector: 'app-genre-movie',
  templateUrl: './genre-movie.component.html',
  styleUrls: ['./genre-movie.component.css']
})
export class GenreMovieComponent implements OnInit {
  moviesGenre: Object;
  title: string;
  public id: number;
  loader = true;

  constructor(
    private movieService: MovieService,
    private router: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.router.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.title = params['name'];
      this.getMoviesGenre(this.id);
    });
  }

  getMoviesGenre(id): void {
    this.movieService.getMoviesByGenre(id).pipe(delay(2000)).subscribe((res: any) => {
      this.moviesGenre = res.results;
      this.loader = false;
    });
  }


}
