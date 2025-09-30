// app/(tabs)/_layout.tsx

import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Platform } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        // Cores da aba: Mantendo o que estava na primeira parte antes do conflito,
        // mas você pode usar o tema dinâmico aqui se quiser!
        tabBarActiveTintColor: '#9d86f7', // Cor ativa (roxo/lilás)
        tabBarInactiveTintColor: 'green', // Cor inativa (verde)
        
        // Configurações de layout da aba (do segundo bloco de código)
        headerShown: false, // Oculta o cabeçalho padrão das abas
        tabBarStyle: Platform.select({
          ios: {
            // Estilo para iOS para permitir efeitos de blur (se usado)
            position: 'absolute',
          },
          default: {},
        }),
      }}>
      
      {/* -------------------- Tab: Index -------------------- */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'Index',
          headerShown: true, // Cabeçalho visível na tela Index
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      
      {/* -------------------- Tab: Explore -------------------- */}
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          headerShown: true, // Cabeçalho visível na tela Explore
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search" color={color} size={size} />
          ),
        }}
      />
      
      {/* -------------------- Tab: xulambs (Se existir) -------------------- */}
      {/* Se você tiver uma tela 'xulambs.tsx' no diretório (tabs), 
        adicione a referência aqui.
      */}
      {/* <Tabs.Screen
        name="xulambs" 
        options={{
          title: 'Xulambs',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="aperture" color={color} size={size} />
          ),
        }}
      /> */}
      
    </Tabs>
  );
}