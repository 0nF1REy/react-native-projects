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
    <ImageBackground
      style={styles.background}
      source={{
        uri: "https://www.transparenttextures.com/patterns/old-wall.png",
      }}
    >
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
    resizeMode: "repeat",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f0e1",
  },
  container: {
    backgroundColor: "rgba(245, 240, 225, 0.9)",
    borderRadius: 12,
    padding: 28,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 6,
    maxWidth: "90%",
    borderWidth: 1,
    borderColor: "#c2b280",
  },
  header: {
    fontFamily: "serif",
    fontSize: 30,
    fontWeight: "bold",
    color: "#4a2f1b",
    marginBottom: 6,
    textAlign: "center",
    letterSpacing: 1.8,
  },
  subHeader: {
    fontFamily: "serif",
    fontSize: 16,
    color: "#6e4b3a",
    marginBottom: 22,
    textAlign: "center",
    fontStyle: "italic",
  },
  profilePicture: {
    width: 130,
    height: 130,
    borderRadius: 65,
    borderWidth: 4,
    borderColor: "#8b5e3c",
    marginTop: 20,
    marginBottom: 28,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.35,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonCabinet: {
    marginTop: 18,
    gap: 14,
  },
  vintageButton: {
    backgroundColor: "#8b5e3c",
    paddingVertical: 12,
    paddingHorizontal: 26,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#5a3820",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 3,
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
    marginTop: 28,
    fontSize: 13,
    color: "#5a3820",
    fontFamily: "serif",
    fontStyle: "italic",
    textAlign: "center",
  },
});
