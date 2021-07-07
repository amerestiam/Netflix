import { ITvShowResults } from './tv-result';

export interface ISearchTvResults {
  page: number;
  total_pages: number;
  total_results: number;
  results: ITvShowResults[];
}
