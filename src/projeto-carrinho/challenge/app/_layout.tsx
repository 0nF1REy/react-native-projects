import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { CartProvider } from "../context/CartContext";

export default function RootLayout() {
  return (
    <CartProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
      <StatusBar style="dark" />
    </CartProvider>
  );
}
