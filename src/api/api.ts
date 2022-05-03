const tmdbUrl = "https://api.themoviedb.org/3";
const apiKey = process.env.REACT_APP_API_KEY || "";

export const imgBaseUrl = "https://image.tmdb.org/t/p/w500"

export const fetchDiscovery = async () => {
  const url = new URL(tmdbUrl + "/discover/movie");

  const params = url.searchParams;
  params.append("api_key", apiKey);
  const res = await fetch(url.toString());
  return res.json();
};

export const fetchMovieDetails = async (id: number) => {
  const url = new URL(tmdbUrl + "/movie/" + id);

  const parameters = url.searchParams;
  parameters.append("api_key", apiKey);

  const res = await fetch(url.toString());
  return res.json();
};

export const searchMovies = async (query: string) => {
    const url = new URL(tmdbUrl + "/search/movie");

    const parameters = url.searchParams;
    parameters.append("api_key", apiKey);
    parameters.append("query", query);

    const res = await fetch(url.toString());
    return res.json();
}
