import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { ITheMovieDB } from './the-movie-db';

import { IConfiguration } from '../../models/TheMovieDB/configuration';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService extends ITheMovieDB {
  constructor(private httpClient: HttpClient) {
    super();
  }

  getConfiguration(): Observable<IConfiguration> {
    const url = `${this.apiUrl}/configuration`;
    const params = this.createParams();

    return this.httpClient.get<IConfiguration>(url, { params, })
      .pipe(
        tap(res => console.log(`Get configuration: ${JSON.stringify(res)}`)),
        catchError(this.handleError<IConfiguration>('getConfiguration()'))
      );
  }
}
