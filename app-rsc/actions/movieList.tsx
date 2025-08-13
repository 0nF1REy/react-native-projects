"use server";

import "server-only";

interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  release_date: string;
  vote_average: number;
  vote_count: number;
  genre_ids: number[];
  adult: boolean;
  original_language: string;
  original_title: string;
  popularity: number;
  video: boolean;
}

interface ApiResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

const API_KEY = process.env.TMDB_API_KEY || "your_api_key_here";
const API_URL = `https://api.themoviedb.org/3/discover/movie`;

export async function getMovieList(page: number = 1): Promise<ApiResponse> {
  try {
    const response = await fetch(
      `${API_URL}?api_key=${API_KEY}&page=${page}&sort_by=popularity.desc&include_adult=false&include_video=false&language=pt-BR`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: ApiResponse = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw new Error('Failed to fetch movies');
  }
}

export async function getMovieById(id: number): Promise<Movie | null> {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=pt-BR`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const movie: Movie = await response.json();
    return movie;
  } catch (error) {
    console.error('Error fetching movie:', error);
    return null;
  }
}

export async function searchMovies(query: string, page: number = 1): Promise<ApiResponse> {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}&page=${page}&language=pt-BR&include_adult=false`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: ApiResponse = await response.json();
    return data;
  } catch (error) {
    console.error('Error searching movies:', error);
    throw new Error('Failed to search movies');
  }
}

// Utility function para construir URLs de imagens
export function getImageUrl(path: string, size: 'w500' | 'w780' | 'original' = 'w500'): string {
  return `https://image.tmdb.org/t/p/${size}${path}`;
}
