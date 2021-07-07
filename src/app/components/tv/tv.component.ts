import { Component, OnInit } from '@angular/core';
import { TvShowService } from '../../services/TheMovieDB/tv-show.service';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css']
})
export class TvComponent implements OnInit {
  popular: any;
  onTv: any;
  loader = true;

  constructor(private tvShowService: TvShowService) {
  }

  ngOnInit(): void {
    this.tvShow(1);
    this.getPopularTvShow(1);
  }

  tvShow(page: number): void {
    this.tvShowService.getCurrentlyAiringTvShows().pipe(delay(2000)).subscribe((res: any) => {
      this.onTv = res.results;
      this.loader = false;
    });
  }

  getPopularTvShow(page: number): void {
    this.tvShowService.getMostPopularTvShows().pipe(delay(2000)).subscribe((res: any) => {
      this.popular = res.results;
      this.loader = false;
    });
  }
}
