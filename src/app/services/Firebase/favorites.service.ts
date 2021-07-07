import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, QueryFn } from '@angular/fire/firestore';
import { IFavorite } from '../../models/Firestore/favorite';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  readonly collectionName = 'favorites';

  constructor(private firestore: AngularFirestore) {
  }

  getUserFavoriteList(userId: string, query?: QueryFn): AngularFirestoreCollection<IFavorite> {
    return this.firestore.collection<IFavorite>(`users/${userId}/${this.collectionName}`, query);
  }
}
