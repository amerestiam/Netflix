import {Component, Input, OnInit} from '@angular/core';
import { faAngleDown, faBell, faSearch } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../../services/Firebase/auth.service';
import { Router } from '@angular/router';
import { BridgeService } from '../../services/Common/bridge.service';
import {TvShowService} from '../../services/TheMovieDB/tv-show.service';
import {MovieService} from '../../services/TheMovieDB/movie.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  faAngleDown = faAngleDown;
  faBell = faBell;
  faSearch = faSearch;
  isLoggedIn = false;
  user: firebase.default.User = null;
  searchStr: string;

  constructor(public auth: AuthService,
              private router: Router,
              private bridgeService: BridgeService) {
    this.auth.user$.subscribe(user => {
      this.isLoggedIn = !!user;
      this.user = user;
      this.bridgeService.userId = user ? user.uid : null;
    });
  }

  ngOnInit(): void {

  }

  login(): void {
    this.auth.login();
    this.router.navigate(['home']);
  }

  logout(): void {
    this.auth.logout();
  }

  search(): void {
    this.router.navigate(['search', this.searchStr]);
  }
}
