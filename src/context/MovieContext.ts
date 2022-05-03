import { createContext, useContext } from "react";

export type MovieListContent = {
  movieId: number | undefined;
  setMovieId: (id: number) => void;
};

export const MovieListContext = createContext<MovieListContent>({
  movieId: undefined,
  setMovieId: () => {},
});

export const useMovieListContext = () => useContext(MovieListContext);
