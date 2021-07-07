import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { TvShowService } from '../../services/TheMovieDB/tv-show.service';
import { TvDialogComponent } from './tv-dialog/tv-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { FavoritesService } from '../../services/Firebase/favorites.service';
import { BridgeService } from '../../services/Common/bridge.service';
import { Observable } from 'rxjs';
import { IFavorite } from '../../models/Firestore/favorite';

@Component({
  selector: 'app-tv-details',
  templateUrl: './tv-details.component.html',
  styleUrls: ['./tv-details.component.css']
})
export class TvDetailsComponent implements OnInit {
  public id: number;
  public video: boolean;
  episode: any;
  baseUrl = 'https://www.youtube.com/embed/';
  autoplay = '?rel=0;&autoplay=1&mute=0';
  relatedVideo: any;
  casts: any = [];
  backdrops: any = [];
  recomendEpisode: any = [];
  favoritesList: Observable<IFavorite[]>;
  isInFavorites = false;

  constructor(
    private tvShowService: TvShowService,
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
      this.getTvDetails(this.id);
      this.getTvVideos(this.id);
      this.getTvCast(this.id);
      this.getTvBackropsImages(this.id);
      this.getRecomendTv(this.id);
      this.favoritesList = this.favoritesService.getUserFavoriteList(this.bridgeService.userId).valueChanges();
      this.favoritesList.subscribe(favorites => {
        console.log('values changed');
        const shows = favorites.filter(favorite => favorite.type === 'show');
        this.isInFavorites = shows.some(show => {
          return show.id === this.id;
        });
        console.log(this.isInFavorites);
      });
    });
  }

  getTvDetails(id): void {
    this.tvShowService.getTvShow(id).subscribe((res: any) => {
      this.episode = res;
    });
  }

  getTvVideos(id): void {
    this.tvShowService.getTvVideos(id).subscribe((res: any) => {
      if (res.results.length) {
        this.video = res.results[0];
        this.relatedVideo = res.results;
      }
    });
  }

  openDialogTv(video): void {
    this.video['url'] = this.sanitizer.bypassSecurityTrustResourceUrl(this.baseUrl + video.key + this.autoplay);
    this.dialog.open(TvDialogComponent, {
      height: '600px',
      width: '900px',
      data: {video: this.video}
    });
  }

  getTvCast(id): void {
    this.tvShowService.getMovieCredits(id).subscribe((res: any) => {
      this.casts = res.cast;
    });
  }

  getTvBackropsImages(id): void {
    this.tvShowService.getTvBackdropsImages(id).subscribe((res: any) => {
      this.backdrops = res.backdrops;
    });
  }

  getRecomendTv(id): void {
    this.tvShowService.getRecomendTv(id).subscribe((res: any) => {
      this.recomendEpisode = res.results;
    });
  }

  favorite(id): void {
    if (!this.isInFavorites) {
      this.favoritesService.getUserFavoriteList(this.bridgeService.userId).add({id, type: 'show'});
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
