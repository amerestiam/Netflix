import { Component, OnInit } from '@angular/core';
import { BridgeService } from '../../services/Common/bridge.service';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
import { FavoritesService } from '../../services/Firebase/favorites.service';
import { IMovie } from '../../models/TheMovieDB/movie';
import { ITvShow } from '../../models/TheMovieDB/tv-show';
import { Observable } from 'rxjs';
import { IFavorite } from '../../models/Firestore/favorite';
import { MovieService } from '../../services/TheMovieDB/movie.service';
import { TvShowService } from '../../services/TheMovieDB/tv-show.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  private collection: AngularFirestoreCollection<IFavorite>;
  private idList: Observable<IFavorite[]>;
  shows: ITvShow[] = [];
  movies: IMovie[] = [];

  constructor(private bridgeService: BridgeService, private favoriteService: FavoritesService,
              private moviesService: MovieService, private tvShowService: TvShowService,
              private router: Router) {
    if (this.bridgeService.userId) {
      this.collection = this.favoriteService.getUserFavoriteList(this.bridgeService.userId);
      this.idList = this.collection.valueChanges();
      this.idList.subscribe(favorites => {
        // Fetch favorites
        favorites.forEach(record => {
          if (record.type === 'movie') {
            this.moviesService.getMovie(record.id).subscribe(movie => {
              console.log(movie);
              this.movies.push(movie);
            });
          } else if (record.type === 'show') {
            this.tvShowService.getTvShow(record.id).subscribe(show => {
              console.log(show);
              this.shows.push(show);
            });
          }
        });
      });
    } else {
      this.router.navigate(['']);
    }
  }

  ngOnInit(): void {
  }

}
