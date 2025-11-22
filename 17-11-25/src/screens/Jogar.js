import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Layout from "../components/Layout";

export default function Jogar({ navigation }) {

  const [selected, setSelected] = useState(null);
  const [confirmado, setConfirmado] = useState(false);
  const [acertou, setAcertou] = useState(null);

  // Alternativas
  const alternativas = [
    "10 + 5",
    "a + 10",
    "a + b",
    "b - a",
  ];

  // índice da alternativa correta
  const correta = 2; // "a + b"

  const confirmar = () => {
    if (selected === null) return;

    setConfirmado(true);
    setAcertou(selected === correta);
  };

  return (
    <Layout
      center={false}
      header={
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View style={styles.backCircle}>
            <Ionicons name="chevron-back" size={28} color="#fff" />
          </View>
        </TouchableOpacity>
      }
    >
      <View style={styles.wrapper}>
        
        <Text style={styles.title}>
          Complete o código{"\n"}corretamente para pontuar:
        </Text>

        <Text style={styles.counter}>1/10</Text>

        <View style={styles.codeBox}>
          <Text style={styles.codeLang}>python</Text>

          <Text style={styles.codeText}>
            {"a = 10\n"}
            {"b = 5\n\n"}
            {"soma = a + b\n\n"}
            {"print(f\"A soma de {{a}} e {{b}} é ____\")"}
          </Text>
        </View>

        {/* ALTERNATIVAS */}
        <View style={styles.altBox}>
          {alternativas.map((alt, index) => (
            <TouchableOpacity
              key={index}
              disabled={confirmado} // trava depois de confirmar
              style={[
                styles.altButton,
                selected === index && styles.altButtonSelected,
                confirmado && index === correta && styles.altCorrect,
                confirmado && selected === index && selected !== correta && styles.altWrong,
              ]}
              onPress={() => setSelected(index)}
            >
              <Text
                style={[
                  styles.altText,
                  selected === index && styles.altTextSelected,
                  confirmado && index === correta && styles.altTextCorrect,
                  confirmado && selected === index && selected !== correta && styles.altTextWrong,
                ]}
              >
                {alt}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* BOTÃO CONFIRMAR */}
        <TouchableOpacity
          style={[
            styles.buttonConfirm,
            !selected && styles.buttonConfirmDisabled,
            confirmado && styles.buttonConfirmDisabled
          ]}
          disabled={!selected || confirmado}
          onPress={confirmar}
        >
          <Text style={styles.buttonConfirmText}>Confirmar</Text>
        </TouchableOpacity>

        {/* RESULTADO */}
        {confirmado && (
          <View style={styles.resultBox}>
            <View style={[styles.resultCircle, acertou ? styles.resultCircleCorrect : styles.resultCircleWrong]}>
              <Ionicons
                name={acertou ? "checkmark" : "close"}
                size={40}
                color="#fff"
              />
            </View>
            <Text style={styles.resultText}>
              {acertou ? "Você acertou!" : "Você errou!"}
            </Text>
          </View>
        )}

      </View>
    </Layout>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
    width: "100%",
    marginTop: 80,
    gap: 20,
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
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
  },

  counter: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },

  codeBox: {
    width: "85%",
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 20,
  },

  codeLang: {
    color: "#555",
    marginBottom: 10,
  },

  codeText: {
    color: "#000",
    fontSize: 16,
    fontFamily: "monospace",
  },

  altBox: {
    width: "85%",
    gap: 12,
  },

  altButton: {
    backgroundColor: "#fff",
    paddingVertical: 14,
    paddingHorizontal: 15,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#fff",
  },

  altButtonSelected: {
    backgroundColor: "#00B8FF",
    borderColor: "#00B8FF",
  },

  altCorrect: {
    backgroundColor: "#00C851",
    borderColor: "#00C851",
  },

  altWrong: {
    backgroundColor: "#FF4444",
    borderColor: "#FF4444",
  },

  altText: {
    color: "#000",
    fontSize: 18,
    fontWeight: "bold",
  },

  altTextSelected: {
    color: "#fff",
  },

  altTextCorrect: {
    color: "#fff",
  },

  altTextWrong: {
    color: "#fff",
  },

  buttonConfirm: {
    width: "65%",
    paddingVertical: 16,
    backgroundColor: "#fff",
    borderRadius: 12,
    alignItems: "center",
    marginTop: 10,
  },

  buttonConfirmDisabled: {
    opacity: 0.4,
  },

  buttonConfirmText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },

  resultBox: {
    alignItems: "center",
    marginTop: 20,
  },

  resultCircle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    alignItems: "center",
    justifyContent: "center",
  },

  resultCircleCorrect: {
    backgroundColor: "#00C851",
  },

  resultCircleWrong: {
    backgroundColor: "#FF4444",
  },

  resultText: {
    marginTop: 10,
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});
