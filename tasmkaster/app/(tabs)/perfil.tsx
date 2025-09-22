import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";
import { useRouter } from "expo-router";

export default function Perfil() {
  const router = useRouter();

  return (
    <ImageBackground style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.header}>The Digital Compendium</Text>
        <Text style={styles.subHeader}>— A Vintage Persona Profile —</Text>

        <Image
          source={{ uri: "https://i.pravatar.cc/300" }}
          style={styles.profilePicture}
        />

        <View style={styles.buttonCabinet}>
          <TouchableOpacity
            style={styles.vintageButton}
            onPress={() => router.push("/page-03")}
          >
            <Text style={styles.buttonText}>Acessar Caderno de Bordo</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.vintageButton}
            onPress={() => router.push("/page-04")}
          >
            <Text style={styles.buttonText}>Consultar Anais Antigos</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.footerText}>
          © {new Date().getFullYear()} Edição Limitada. Todos os Direitos
          Reservados.
        </Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    borderRadius: 10,
    padding: 30,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    maxWidth: "90%",
  },
  header: {
    fontFamily: "serif",
    fontSize: 32,
    fontWeight: "bold",
    color: "#4a4a4a",
    marginBottom: 5,
    textAlign: "center",
    letterSpacing: 1.5,
  },
  subHeader: {
    fontFamily: "sans-serif",
    fontSize: 16,
    color: "#6e6e6e",
    marginBottom: 25,
    textAlign: "center",
    fontStyle: "italic",
  },
  profilePicture: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: "#8b4513",
    marginTop: 20,
    marginBottom: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 4,
  },
  buttonCabinet: {
    marginTop: 20,
    gap: 15,
  },
  vintageButton: {
    backgroundColor: "#8b4513",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#6e2c00",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 2,
  },
  buttonText: {
    color: "#fdf5e6",
    fontFamily: "serif",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
    textShadowColor: "rgba(0, 0, 0, 0.3)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  footerText: {
    marginTop: 30,
    fontSize: 12,
    color: "#8b4513",
    fontFamily: "sans-serif",
    fontStyle: "italic",
    textAlign: "center",
  },
});
