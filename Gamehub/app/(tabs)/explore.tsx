import { Button } from "react-native";
import { useRouter } from "expo-router";
import styled, { DefaultTheme, useTheme } from "styled-components/native";
import { spacing, typography } from "../constants/theme";
import HeaderWithAvatar from "../components/HeaderWithAvatar";

// --- Componente Principal ---

export default function Explore() {
  const router = useRouter();
  const theme = useTheme();

  return (
    <ScreenContainer>
      <HeaderWithAvatar userName="Retrô" notifications={5} />

      <ContentContainer>
        <Title>Explorar Mundos</Title>
        <Subtitle>Encontre novos jogos e jogadores.</Subtitle>

        <ButtonWrapper>
          <Button
            title="Perfil Beltranis"
            onPress={() => router.push("/beltranis")}
            color={theme.primary}
          />
        </ButtonWrapper>
        <ButtonWrapper>
          <Button
            title="Página Xulambs"
            onPress={() => router.push("/xulambs")}
            color={theme.accent}
          />
        </ButtonWrapper>
      </ContentContainer>
    </ScreenContainer>
  );
}

// --- Componentes Estilizados com Anotação Explícita ---
const ScreenContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }: { theme: DefaultTheme }) => theme.background};
`;

const ContentContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: ${spacing.lg}px;
`;

const Title = styled.Text`
  font-size: ${typography.sizes.title}px;
  font-weight: ${typography.weights.bold};
  margin-bottom: ${spacing.md}px;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.text};
  font-family: monospace;
`;

const Subtitle = styled.Text`
  font-size: ${typography.sizes.lg}px;
  margin-bottom: ${spacing.xl}px;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.textSecondary};
`;

const ButtonWrapper = styled.View`
  margin-vertical: ${spacing.sm}px;
  width: 80%;
  border-radius: 8px;
  overflow: hidden;
`;
