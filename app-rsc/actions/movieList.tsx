import { TMDB_API_KEY } from "@env";

interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string | null;
  release_date: string;
  vote_average: number;
}

interface ApiResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

const API_KEY = TMDB_API_KEY || "fallback_key";

const API_URL = `https://api.themoviedb.org/3/discover/movie`;

export async function getMovieList(page: number = 1): Promise<ApiResponse> {
  const url = `${API_URL}?api_key=${API_KEY}&page=${page}&sort_by=popularity.desc&include_adult=false&include_video=false&language=pt-BR`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Erro na API TMDB: ${response.statusText}`);
  }

  const data = await response.json();
  return data;
}

export function getImageUrl(
  path: string,
  size: "w500" | "w780" | "original" = "w500"
): string {
  return `https://image.tmdb.org/t/p/${size}${path}`;
}
