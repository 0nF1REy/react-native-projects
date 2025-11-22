import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from "react-native";
import Layout from "../components/Layout";

const LANGUAGES = [
  { id: "js", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png" },
  { id: "csharp", icon: "https://cdn-icons-png.flaticon.com/512/6132/6132221.png" },
  { id: "php", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968332.png" },
  { id: "python", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png" },
  { id: "cpp", icon: "https://cdn-icons-png.flaticon.com/512/6132/6132222.png" },
  { id: "java", icon: "https://cdn-icons-png.flaticon.com/512/226/226777.png" },
];

export default function Home({ navigation }) {
  const handlePress = (item) => navigation.navigate("Dinamica");

  return (
    <Layout>
      <View style={styles.wrapper}>
        <Text style={styles.title}>Escolha uma linguagem</Text>

        <FlatList
          data={LANGUAGES}
          numColumns={2}
          keyExtractor={(item) => item.id}
          columnWrapperStyle={{ justifyContent: "center" }}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.card} onPress={() => handlePress(item)}>
              <Image source={{ uri: item.icon }} style={styles.img} />
            </TouchableOpacity>
          )}
        />
      </View>

      <StatusBar style="light" />
    </Layout>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 25,
  },

  card: {
    width: 120,
    height: 120,
    margin: 10,
  },

  img: {
    width: 100,
    height: 100,
    borderRadius: 20,
  },
});
