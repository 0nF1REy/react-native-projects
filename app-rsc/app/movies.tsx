import React from "react";
import { ScrollView, View, Text, Image, StyleSheet } from "react-native";
import { getMovieList, getImageUrl } from "../actions/movieList";

// Server Component para listar filmes
export default async function MoviesPage() {
  try {
    const movieData = await getMovieList(1);
    const movies = movieData.results.slice(0, 10); 

    return (
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Filmes Populares</Text>

        {movies.map((movie) => (
          <View key={movie.id} style={styles.movieCard}>
            <Image
              source={{ uri: getImageUrl(movie.poster_path) }}
              style={styles.poster}
              resizeMode="cover"
            />
            <View style={styles.movieInfo}>
              <Text style={styles.movieTitle}>{movie.title}</Text>
              <Text style={styles.movieYear}>
                {new Date(movie.release_date).getFullYear()}
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
          Total: {movieData.total_results} filmes encontrados
        </Text>
      </ScrollView>
    );
  } catch {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>
          Erro ao carregar filmes. Verifique sua chave da API do TMDB.
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#333",
  },
  movieCard: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 8,
    marginBottom: 16,
    padding: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  poster: {
    width: 80,
    height: 120,
    borderRadius: 6,
  },
  movieInfo: {
    flex: 1,
    marginLeft: 12,
    justifyContent: "space-between",
  },
  movieTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 4,
  },
  movieYear: {
    fontSize: 14,
    color: "#666",
    marginBottom: 4,
  },
  movieRating: {
    fontSize: 14,
    color: "#f39c12",
    marginBottom: 8,
  },
  movieOverview: {
    fontSize: 12,
    color: "#666",
    lineHeight: 16,
  },
  footer: {
    textAlign: "center",
    color: "#999",
    marginTop: 20,
    marginBottom: 40,
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  errorText: {
    fontSize: 16,
    color: "#e74c3c",
    textAlign: "center",
  },
});
