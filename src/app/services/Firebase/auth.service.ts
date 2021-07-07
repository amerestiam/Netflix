import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<firebase.default.User>;
  loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor(private afAuth: AngularFireAuth, private router: Router) {
    this.user$ = afAuth.authState;
  }

  async login(): Promise<void> {
    await this.afAuth.signInWithRedirect(new firebase.default.auth.GoogleAuthProvider());
    this.loggedIn.next(true);
    console.log(this.loggedIn);
    await this.router.navigate(['/']);
  }
  logout(): void {
    this.afAuth.signOut();
    this.loggedIn.next(false);
    console.log(this.loggedIn);
    this.router.navigate(['/login']);
  }

  get isLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  // get appUser$(): Observable<AppUser | null> {
  //   return this.user$.pipe(
  //     switchMap(user => user
  //       ? this.userService.get(user.uid).valueChanges()
  //       : of(null)
  //     )
  //   );
  // }
}
