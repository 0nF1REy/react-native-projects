import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#FFB347",
        tabBarInactiveTintColor: "#F4E4C1",
        tabBarStyle: {
          backgroundColor: "#3B2C2C",
          borderTopWidth: 0,
          height: 70,
          paddingBottom: 8,
          paddingTop: 8,
        },
        tabBarLabelStyle: {
          fontWeight: "700",
          letterSpacing: 1,
          fontSize: 12,
        },
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
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: ({ color }) => (
            <Ionicons name="compass" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="diario"
        options={{
          title: "Diário",
          tabBarIcon: ({ color }) => (
            <Ionicons name="book" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
