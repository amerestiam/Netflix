import { HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable, of } from 'rxjs';

export class ITheMovieDB {
  private internalApiUrl: string;
  private apiKey: string;

  constructor() {
    this.internalApiUrl = environment.apiUrl;
    this.apiKey = environment.apiKey;
  }

  get apiUrl(): string {
    return this.internalApiUrl;
  }

  createParams(params?: object): HttpParams {
    let data = new HttpParams();
    data = data.append('api_key', this.apiKey);

    if (params) {
      for (const [key, value] of Object.entries(params)) {
        data = data.append(String(key), value);
      }
    }

    return data;
  }

  protected handleError<T>(operation = 'operation', result?: T): (error: any) => Observable<T> {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${JSON.stringify(error)}`);
      return of(result as T);
    };
  }
}
