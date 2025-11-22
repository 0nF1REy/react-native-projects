import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useCart } from "../context/CartContext";
import { Ionicons } from "@expo/vector-icons";

export default function CartIcon() {
  const { items } = useCart();
  const itemCount = items.reduce((count, item) => count + item.quantity, 0);

  return (
    <View style={styles.container}>
  <Ionicons name="cart-outline" size={28} color="black" />
      {itemCount > 0 && (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{itemCount}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  text: { fontSize: 28 },
  badge: {
    position: "absolute",
    top: 2,
    right: 2,
    backgroundColor: "red",
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  badgeText: {
    color: "white",
    fontSize: 10,
    fontWeight: "bold",
  },
});
