import { ITvSeason } from './tv-season';
import { IGenre } from './genre';

export interface ITvShow {
  id: number;
  name: string;
  overview: string;
  genres: IGenre[];
  number_of_episodes: number;
  number_of_seasons: number;
  seasons: ITvSeason[];
  popularity: number;
  poster_path: string;
}
