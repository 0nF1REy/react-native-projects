"use server";

import { Text } from "react-native";

export default async function renderInfo({ name }: { name: string }) {
  return <Text>Hello, {name}!</Text>;
}
