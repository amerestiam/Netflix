import { IGenre } from './genre';

export interface IMovie {
  id: number;
  title: string;
  overview: string;
  genres_ids: IGenre[];
  poster_path: string;
  popularity: number;
  release_date: string;
  runtime: number;
}
