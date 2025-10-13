<<<<<<< HEAD
import { Button } from "react-native";
=======
import { Button, } from "react-native";
>>>>>>> 3c34d21 (main: feat (gamehub) - Launched a new project by reformulating an old project)
import { useRouter } from "expo-router";
import styled, { DefaultTheme, useTheme } from "styled-components/native";

import { spacing, typography } from "../constants/theme";
import HeaderWithAvatar from "../components/HeaderWithAvatar";
<<<<<<< HEAD

=======
import { Link } from "expo-router";
>>>>>>> 3c34d21 (main: feat (gamehub) - Launched a new project by reformulating an old project)
// --- Componente Principal ---
export default function Index() {
  const router = useRouter();
  const theme = useTheme();

  return (
    <ScreenContainer>
      <HeaderWithAvatar
        userName="Retrô"
<<<<<<< HEAD
        onAvatarPress={() => router.push("/beltranis")}
=======
        onAvatarPress={() => router.push("/beltranis")} //trocar aquui
>>>>>>> 3c34d21 (main: feat (gamehub) - Launched a new project by reformulating an old project)
      />

      <ContentContainer>
        <Title>Página Inicial</Title>
        <Subtitle>Bem-vindo!</Subtitle>
<<<<<<< HEAD

=======
<Link href="/community" asChild>
  <Button title="Comunidade" color={theme.error} />
</Link>
>>>>>>> 3c34d21 (main: feat (gamehub) - Launched a new project by reformulating an old project)
        <ButtonWrapper>
          <Button
            title="Ir para Xulambs"
            onPress={() => router.push("/xulambs")}
            color={theme.primary}
          />
        </ButtonWrapper>
        <ButtonWrapper>
          <Button
            title="Ir para Beltranis"
            onPress={() => router.push("/beltranis")}
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
