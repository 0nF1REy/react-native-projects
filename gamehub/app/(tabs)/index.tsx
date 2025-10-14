import { Button } from "react-native";
import { useRouter } from "expo-router";
import styled, { DefaultTheme, useTheme } from "styled-components/native";

import { spacing, typography } from "../constants/theme";
import HeaderWithAvatar from "../components/HeaderWithAvatar";
import { Link } from "expo-router";

export default function Index() {
  const router = useRouter();
  const theme = useTheme();

  return (
    <ScreenContainer>
      <HeaderWithAvatar
        userName="Retrô"
        onAvatarPress={() => router.push("/gamer-profile-screen")}
      />

      <ContentContainer>
        <Title>Página Inicial</Title>
        <Subtitle>Bem-vindo!</Subtitle>
        <Link href="/community" asChild>
          <Button title="Comunidade" color={theme.error} />
        </Link>
        <ButtonWrapper>
          <Button
            title="Ir para Xulambs"
            onPress={() => router.push("/xulambs")}
            color={theme.primary}
          />
        </ButtonWrapper>
        <ButtonWrapper>
          <Button
            title="Ir para a tela do Gamer Profile!"
            onPress={() => router.push("/gamer-profile-screen")}
            color={theme.accent}
          />
        </ButtonWrapper>
      </ContentContainer>
    </ScreenContainer>
  );
}

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
  margin-top: ${spacing.sm}px;
  margin-bottom: ${spacing.sm}px;
  width: 80%;
  border-radius: 8px;
  overflow: hidden;
`;
