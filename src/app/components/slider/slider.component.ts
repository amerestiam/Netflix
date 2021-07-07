import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/TheMovieDB/movie.service';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  loader = true;
  nomPlaying: any;
  totalResults: any;

  constructor(private movieService: MovieService) {
  }

  ngOnInit(): void {
    this.getNowPlayingMovies(1);
  }

  getNowPlayingMovies(page: number): void {
    this.movieService.getNowPlaying(page).pipe(delay(2000)).subscribe((res: any) => {
        this.nomPlaying = res.results;
        this.totalResults = res.total_results;
        this.loader = false;
      },
      error => console.log(error));
  }

}
