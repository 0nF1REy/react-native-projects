import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Layout from "../components/Layout";

export default function Dinamica({ navigation }) {
  return (
    <Layout
      header={
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View style={styles.backCircle}>
            <Ionicons name="chevron-back" size={28} color="#fff" />
          </View>
        </TouchableOpacity>
      }
    >
      <View style={styles.wrapper}>
        <Text style={styles.title}>Escolha a dinâmica</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Jogar")}
        >
          <Text style={styles.buttonText}>JOGAR</Text>
        </TouchableOpacity>

        <Text style={styles.ou}>OU</Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>ESTUDAR</Text>
        </TouchableOpacity>
      </View>
    </Layout>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
    justifyContent: "center",
  },

  backCircle: {
    width: 50,
    height: 50,
    backgroundColor: "#00B8FF",
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 30,
  },

  button: {
    width: "70%",
    paddingVertical: 18,
    backgroundColor: "#0ae439ff",
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },

  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },

  ou: {
    color: "#0a0a0aff",
    fontSize: 18,
    marginVertical: 15,
    fontWeight: "bold",
  },
});
