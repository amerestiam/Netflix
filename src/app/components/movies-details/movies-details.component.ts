import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { MovieService } from '../../services/TheMovieDB/movie.service';
import { MovieDialogComponent } from './movie-dialog/movie-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { FavoritesService } from '../../services/Firebase/favorites.service';
import { IMovie } from '../../models/TheMovieDB/movie';
import { BridgeService } from '../../services/Common/bridge.service';
import { Observable } from 'rxjs';
import { IFavorite } from '../../models/Firestore/favorite';

// import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-movies-details',
  templateUrl: './movies-details.component.html',
  styleUrls: ['./movies-details.component.css']
})
export class MoviesDetailsComponent implements OnInit {
  public id: number;
  public video: boolean;
  movie: any;
  baseUrl = 'https://www.youtube.com/embed/';
  autoplay = '?rel=0;&autoplay=1&mute=0';
  relatedvideo: any;
  casts: any = [];
  backdrops: any = [];
  recomendMovies: any = [];
  favoritesList: Observable<IFavorite[]>;
  isInFavorites = false;

  constructor(
    private movieService: MovieService,
    private router: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private dialog: MatDialog,
    private favoritesService: FavoritesService,
    private bridgeService: BridgeService
  ) {

  }

  ngOnInit(): void {
    this.router.params.subscribe((params: Params) => {
      this.id = params.id;
      this.getSingleMoviesVideos(this.id);
      this.getSingleMoviesDetails(this.id);
      this.getCast(this.id);
      this.getBackropsImages(this.id);
      this.getRecomendMovie(this.id);
      this.favoritesList = this.favoritesService.getUserFavoriteList(this.bridgeService.userId).valueChanges();
      this.favoritesList.subscribe(favorites => {
        console.log('values changed');
        const movies = favorites.filter(favorite => favorite.type === 'movie');
        this.isInFavorites = movies.some(movie => {
          return movie.id === this.id;
        });
        console.log(this.isInFavorites);
      });
    });
  }

  getSingleMoviesDetails(id): void {
    this.movieService.getMovie(id).subscribe((res: any) => {
      this.movie = res;
    });
  }

  getSingleMoviesVideos(id): void {
    this.movieService.getMovieVideos(id).subscribe((res: any) => {
      if (res.results.length) {
        this.video = res.results[0];
        this.relatedvideo = res.results;
      }
    });
  }

  openDialogMovie(video): void {
    this.video['url'] = this.sanitizer.bypassSecurityTrustResourceUrl(this.baseUrl + video.key + this.autoplay);
    this.dialog.open(MovieDialogComponent, {
      height: '600px',
      width: '900px',
      data: {video: this.video}
    });
  }

  getCast(id): void {
    this.movieService.getMovieCredits(id).subscribe((res: any) => {
      this.casts = res.cast;
    });
  }

  getBackropsImages(id): void {
    this.movieService.getBackdropsImages(id).subscribe((res: any) => {
      this.backdrops = res.backdrops;
    });
  }

  getRecomendMovie(id): void {
    this.movieService.getRecomendMovies(id).subscribe((res: any) => {
      this.recomendMovies = res.results;
    });
  }

  favorite(id): void {
    if (!this.isInFavorites) {
      this.favoritesService.getUserFavoriteList(this.bridgeService.userId).add({id, type: 'movie'});
    } else {
      this.favoritesService.getUserFavoriteList(this.bridgeService.userId, ref => ref.where('id', '==', String(this.id)))
        .get().subscribe(res => {
        res.docs.forEach(doc => {
          const docId = doc.id;
          this.favoritesService.getUserFavoriteList(this.bridgeService.userId).doc(docId).delete();
        });
      });
    }
  }
}
