import { useQuery } from "react-query";
import { fetchDiscovery, fetchMovieDetails, searchMovies } from "../api/api";
import { Movie, MoviePage } from "../types/types";

export const useDiscover = () =>
  useQuery<MoviePage, Error>("Discover", fetchDiscovery);

export const useMovie = (id: number, enabled: boolean) =>
  useQuery<Movie, Error>(["movieDetail", id], () => fetchMovieDetails(id), {
    enabled: enabled,
  });

export const useSearch = (query: string, enabled: boolean) =>
  useQuery<MoviePage>(["movieSearch", query], () => searchMovies(query), {
    enabled: enabled,
  });

// Combine Discovery and Search. When query is empty, fallback to discovery
export const useSearchOrDiscover = (query: string) =>
  useQuery<MoviePage>(["movieSearchDiscover", query], () =>
    query ? searchMovies(query) : fetchDiscovery()
  );
