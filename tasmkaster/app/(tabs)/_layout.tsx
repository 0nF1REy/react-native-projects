import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#9d86f7',
        tabBarInactiveTintColor: 'green',
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Index',
          headerShown: true,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          headerShown: true, //cabeçalho visível
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search" color={color} size={size} />
          ),
        }}
      />
            <Tabs.Screen
        name="perfil"
        options={{
          title: 'Perfil',
          headerShown: true, //cabeçalho visível
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}