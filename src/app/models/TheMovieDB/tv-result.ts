import { ITvShow } from './tv-show';
import { IGenre } from './genre';

export interface ITvShowResults extends ITvShow {
  genre_ids: IGenre[];
}
