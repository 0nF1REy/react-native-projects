import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import CartIcon from "../../components/CartIcon";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#007AFF",
        headerRight: () => <CartIcon />,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="redux"
        options={{
          title: "Redux Carrinho",
          tabBarIcon: ({ color }) => (
            <Ionicons name="aperture-outline" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
