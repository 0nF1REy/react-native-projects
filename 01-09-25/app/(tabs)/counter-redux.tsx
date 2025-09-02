import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { createStore } from "redux";
import { Provider, useDispatch, useSelector } from "react-redux";

const initialState = {
  value: 0,
};

const counterReducer = (state = initialState, action: { type: string }) => {
  switch (action.type) {
    case "counter/incremented":
      return { ...state, value: state.value + 1 };

    case "counter/decremented":
      return { ...state, value: state.value - 1 };

    default:
      return state;
  }
};

const store = createStore(counterReducer);

const App: React.FC = () => {
  const dispatch = useDispatch();
  const value = useSelector((state: { value: number }) => state.value);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Máquina de Contagem Vintage</Text>
      <View style={styles.counterDisplay}>
        <Text style={styles.counterText}>{value}</Text>
        <Text style={styles.counterLabel}>vezes</Text>
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => dispatch({ type: "counter/incremented" })}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => dispatch({ type: "counter/decremented" })}
        >
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.specialButton}
        onPress={() => {
          if (value % 2 !== 0) {
            dispatch({ type: "counter/incremented" });
          }
        }}
      >
        <Text style={styles.buttonText}>Incrementar se Ímpar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.specialButton}
        onPress={() => {
          setTimeout(() => {
            dispatch({ type: "counter/incremented" });
          }, 1000);
        }}
      >
        <Text style={styles.buttonText}>Incrementar Atrasado</Text>
      </TouchableOpacity>
    </View>
  );
};

const Root: React.FC = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F7E7CE",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontFamily: "Georgia",
    fontWeight: "bold",
    marginBottom: 30,
    color: "#8B4513",
    textAlign: "center",
    textShadowColor: "rgba(0, 0, 0, 0.1)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  counterDisplay: {
    backgroundColor: "#FFF8DC",
    paddingVertical: 20,
    paddingHorizontal: 40,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#D2B48C",
    marginBottom: 30,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 6,
  },
  counterText: {
    fontSize: 60,
    fontFamily: "Palatino",
    fontWeight: "bold",
    color: "#A0522D",
  },
  counterLabel: {
    fontSize: 20,
    fontFamily: "Palatino",
    color: "#5C4033",
    marginTop: 5,
  },
  buttonRow: {
    flexDirection: "row",
    marginBottom: 20,
    justifyContent: "space-around",
    width: "80%",
  },
  actionButton: {
    backgroundColor: "#CD853F",
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 5,
    marginHorizontal: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    minWidth: 80,
    alignItems: "center",
  },
  specialButton: {
    backgroundColor: "#A0522D",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 15,
    width: "80%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 18,
    fontFamily: "Verdana",
  },
});

export default Root;
