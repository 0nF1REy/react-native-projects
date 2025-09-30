import { Link, Stack } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
// eslint-disable-next-line import/no-named-as-default
import styled, { DefaultTheme } from "styled-components/native";

import { spacing, typography, themes } from "./constants/theme";

// --- Componente Principal ---
export default function NotFoundScreen() {
  const retroTheme = themes.retro;

  const headerStyleWithBorder = {
    backgroundColor: retroTheme.surface,
    borderBottomWidth: 2,
    borderBottomColor: retroTheme.border,
  };

  return (
    <>
      <Stack.Screen
        options={{
          title: "FALHA NA ROTA",
          headerShadowVisible: false,
          headerStyle: headerStyleWithBorder,
          headerTintColor: retroTheme.primary,
          headerTitleStyle: { fontFamily: "monospace", fontWeight: "bold" },
        }}
      />
      <Container>
        <Icon name="alert-circle-outline" size={80} color={retroTheme.accent} />

        <Title>404</Title>

        <Subtitle>Parece que você encontrou uma falha no Grid.</Subtitle>

        <LinkButton href="/">
          <LinkButtonText>VOLTAR AO INÍCIO</LinkButtonText>
        </LinkButton>
      </Container>
    </>
  );
}

// --- Componentes Estilizados com Anotação Explícita ---
const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: ${spacing.lg}px;
  background-color: ${({ theme }: { theme: DefaultTheme }) => theme.background};
`;

const Icon = styled(Ionicons)`
  margin-bottom: ${spacing.lg}px;
`;

const Title = styled.Text`
  font-size: ${typography.sizes.heading * 2}px;
  font-weight: bold;
  font-family: monospace;
  margin-bottom: ${spacing.md}px;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.primary};
`;

const Subtitle = styled.Text`
  font-size: ${typography.sizes.lg}px;
  font-family: monospace;
  text-align: center;
  margin-bottom: ${spacing.xl}px;
  max-width: 300px;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.textSecondary};
`;

const LinkButton = styled(Link)`
  margin-top: ${spacing.lg}px;
  padding: ${spacing.md}px ${spacing.xl}px;
  border-radius: 8px;
  border-width: 2px;
  background-color: ${({ theme }: { theme: DefaultTheme }) => theme.primary};
  border-color: ${({ theme }: { theme: DefaultTheme }) => theme.accent};
`;

const LinkButtonText = styled.Text`
  font-size: ${typography.sizes.lg}px;
  font-weight: bold;
  font-family: monospace;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.background};
`;
