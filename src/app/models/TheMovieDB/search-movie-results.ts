import { IMovie } from './movie';

export interface ISearchMovieResults {
  page: number;
  total_pages: number;
  total_results: number;
  results: IMovie[];
}
