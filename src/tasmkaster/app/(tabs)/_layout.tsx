import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#f5f0e1",
          borderTopWidth: 2,
          borderTopColor: "#b59b82",
          height: 70,
        },
        tabBarActiveTintColor: "#6b4226",
        tabBarInactiveTintColor: "#b59b82",
        headerStyle: {
          backgroundColor: "#f5f0e1",
        },
        headerTitleStyle: {
          fontFamily: "serif",
          fontSize: 20,
          color: "#6b4226",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Index",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="perfil"
        options={{
          title: "Perfil",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}
