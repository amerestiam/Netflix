import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {TvShowService} from '../../../services/TheMovieDB/tv-show.service';

@Component({
  selector: 'app-genre-tv',
  templateUrl: './genre-tv.component.html',
  styleUrls: ['./genre-tv.component.css']
})
export class GenreTvComponent implements OnInit {
  tvGenre: Object;
  title: string;
  public id: number;

  constructor(
    private tvShowService: TvShowService,
    private router: ActivatedRoute

  ) { }

  ngOnInit() {
    this.router.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.title = params['name'];
      this.getTvByGenre(this.id);
    });
  }

  getTvByGenre(id) {
    this.tvShowService.getTVShowByGenre(id).subscribe((res: any) => {
      this.tvGenre = res.results;
    });
  }

}
