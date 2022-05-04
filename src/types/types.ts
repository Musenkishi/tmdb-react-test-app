export type Genre = {
  id: number;
  name: string;
};

export type Movie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids?: number[];
  genres?: Genre[];
  tagline?: string;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  status?: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  runtime?: number;
};

export type MoviePage = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};
