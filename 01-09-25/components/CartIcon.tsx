import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { Ionicons } from "@expo/vector-icons";

const CartIcon: React.FC = () => {
  const totalItems = useSelector((state: RootState) =>
    state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
  );

  return (
    <TouchableOpacity style={{ marginRight: 16 }}>
      <View style={{ position: "relative" }}>
        <Ionicons name="cart" size={24} color="black" />
        {totalItems > 0 && (
          <View
            style={{
              position: "absolute",
              top: -8,
              right: -8,
              backgroundColor: "red",
              borderRadius: 8,
              width: 16,
              height: 16,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "white", fontSize: 10 }}>{totalItems}</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default CartIcon;
