import React, { useState, useEffect } from "react";
import {
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { getMovieList, getImageUrl } from "../actions/movieList";

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    async function fetchMovies() {
      try {
        const movieData = await getMovieList(1);
        setMovies(movieData.results.slice(0, 10));
        setTotalResults(movieData.total_results);
      } catch (err: any) {
        setError(true);
        setErrorMessage(err.message || "Erro desconhecido");
      } finally {
        setLoading(false);
      }
    }
    fetchMovies();
  }, []);

  if (loading) {
    return (
      <View style={[styles.container, styles.centerContent]}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={[styles.container, styles.centerContent]}>
        <Text style={styles.errorText}>
          Erro ao carregar filmes: {errorMessage}
        </Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Filmes Populares</Text>

      {movies.map((movie) => (
        <View key={movie.id} style={styles.movieCard}>
          <Image
            source={{
              uri: movie.poster_path
                ? getImageUrl(movie.poster_path)
                : "https://via.placeholder.com/100x150?text=Sem+Imagem",
            }}
            style={styles.poster}
            resizeMode="cover"
          />
          <View style={styles.movieInfo}>
            <Text style={styles.movieTitle}>{movie.title}</Text>
            <Text style={styles.movieYear}>
              {movie.release_date
                ? new Date(movie.release_date).getFullYear()
                : "N/A"}
            </Text>
            <Text style={styles.movieRating}>
              ⭐ {movie.vote_average.toFixed(1)}/10
            </Text>
            <Text style={styles.movieOverview} numberOfLines={3}>
              {movie.overview}
            </Text>
          </View>
        </View>
      ))}

      <Text style={styles.footer}>
        Total: {totalResults} filmes encontrados
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  centerContent: {
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 16,
  },
  movieCard: {
    flexDirection: "row",
    marginBottom: 20,
    borderRadius: 8,
    backgroundColor: "#f9f9f9",
    overflow: "hidden",
    elevation: 2, 
    shadowColor: "#000", 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  poster: {
    width: 100,
    height: 150,
  },
  movieInfo: {
    flex: 1,
    padding: 12,
    justifyContent: "space-between",
  },
  movieTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  movieYear: {
    fontSize: 14,
    color: "#666",
    marginBottom: 4,
  },
  movieRating: {
    fontSize: 14,
    color: "#f5a623",
    marginBottom: 6,
  },
  movieOverview: {
    fontSize: 13,
    color: "#444",
  },
  footer: {
    textAlign: "center",
    fontSize: 14,
    color: "#999",
    marginTop: 16,
    marginBottom: 32,
  },
  errorText: {
    fontSize: 16,
    color: "red",
  },
});
