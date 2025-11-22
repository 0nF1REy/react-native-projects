import { View, Text, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router"; 

export default function CityDetail() {
  const { city } = useLocalSearchParams<{ city: string }>(); 

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>{city}</Text>
        <View style={styles.separator} />
        <Text style={styles.description}>
          Aqui você pode colocar informações detalhadas sobre {city}. Pode ser
          descrição, população, pontos turísticos, clima, cultura, etc.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  card: {
    width: "100%",
    backgroundColor: "#1f1f1f",
    borderRadius: 16,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 6,
    elevation: 8,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#ffd700",
    marginBottom: 10,
    textAlign: "center",
  },
  separator: {
    height: 1,
    backgroundColor: "#333",
    marginVertical: 15,
  },
  description: {
    fontSize: 18,
    color: "#fff",
    lineHeight: 26,
    textAlign: "justify",
  },
});
