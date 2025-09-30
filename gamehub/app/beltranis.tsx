import React from "react";
import { View, Alert } from "react-native";
import styled, { DefaultTheme } from "styled-components/native";
import { spacing, typography } from "./constants/theme";

// --- Tipos e Interfaces ---
interface ActionButtonProps {
  title: string;
  isPrimary?: boolean;
  onPress: () => void;
}

interface ActionButtonContainerProps {
  isPrimary?: boolean;
}

// --- Componente de Lógica Pequeno ---
const ActionButton: React.FC<ActionButtonProps> = ({
  title,
  isPrimary,
  onPress,
}) => (
  <ActionButtonContainer isPrimary={isPrimary} onPress={onPress}>
    <ActionButtonText isPrimary={isPrimary}>{title}</ActionButtonText>
  </ActionButtonContainer>
);

// --- Componente Principal da Tela ---
export default function BeltranisProfile() {
  const [isFollowing, setIsFollowing] = React.useState<boolean>(false);

  const handleFollow = () => {
    setIsFollowing((prev) => !prev);
    Alert.alert(
      "Ação",
      !isFollowing ? "Começou a seguir!" : "Deixou de seguir"
    );
  };

  return (
    <ProfileScrollView contentContainerStyle={{ paddingBottom: spacing.lg }}>
      <HeaderSection>
        <AvatarCircle>
          <AvatarText>JD</AvatarText>
        </AvatarCircle>
        <UserName>Jett_Decoder // ID: 2077</UserName>
        <UserInfo>Netrunner | Lvl 99 | Tokyo Grid</UserInfo>
      </HeaderSection>

      <Row style={{ gap: spacing.md }}>
        <ActionButton
          title={isFollowing ? "SEGUINDO" : "SEGUIR"}
          isPrimary={!isFollowing}
          onPress={handleFollow}
        />
        <ActionButton
          title="MENSAGEM"
          isPrimary={true}
          onPress={() => Alert.alert("Mensagem", "Abrindo chat seguro...")}
        />
      </Row>

      <Row style={{ justifyContent: "space-around" }}>
        {[
          { label: "GAMES", value: "45" },
          { label: "WINS", value: "250" },
          { label: "K/D", value: "2.4" },
        ].map((stat) => (
          <View key={stat.label} style={{ alignItems: "center" }}>
            <StatsValue>{stat.value}</StatsValue>
            <StatsLabel>{stat.label}</StatsLabel>
          </View>
        ))}
      </Row>

      <Section>
        <SectionTitle>Minhas Habilidades</SectionTitle>
        <BodyText>
          &ldquo;Codificando a próxima revolução. Minha rig é uma extensão da
          minha mente. Não me enfrente no Grid.&rdquo;
        </BodyText>
      </Section>
    </ProfileScrollView>
  );
}

// --- Componentes Estilizados ---
const ActionButtonContainer = styled.TouchableOpacity<ActionButtonContainerProps>`
  flex: 1;
  padding: ${spacing.md}px;
  border-radius: 25px;
  align-items: center;
  background-color: ${({
    theme,
    isPrimary = true,
  }: {
    theme: DefaultTheme;
    isPrimary?: boolean;
  }) => (isPrimary ? theme.primary : "transparent")};
  border: 2px solid
    ${({
      theme,
      isPrimary = true,
    }: {
      theme: DefaultTheme;
      isPrimary?: boolean;
    }) => (isPrimary ? "transparent" : theme.primary)};
`;

const ActionButtonText = styled.Text<ActionButtonContainerProps>`
  font-size: ${typography.sizes.md}px;
  font-weight: 600;
  color: ${({
    theme,
    isPrimary = true,
  }: {
    theme: DefaultTheme;
    isPrimary?: boolean;
  }) => (isPrimary ? theme.background : theme.primary)};
`;

const ProfileScrollView = styled.ScrollView`
  flex: 1;
  background-color: ${({ theme }: { theme: DefaultTheme }) => theme.background};
`;

const HeaderSection = styled.View`
  padding: ${spacing.xl}px;
  align-items: center;
  border-bottom-width: 3px;
  border-bottom-color: ${({ theme }: { theme: DefaultTheme }) => theme.accent};
`;

const AvatarCircle = styled.View`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background-color: ${({ theme }: { theme: DefaultTheme }) => theme.primary};
  border: 4px solid ${({ theme }: { theme: DefaultTheme }) => theme.accent};
  margin-bottom: ${spacing.md}px;
  justify-content: center;
  align-items: center;
`;

const AvatarText = styled.Text`
  font-size: ${typography.sizes.heading}px;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.background};
`;

const UserName = styled.Text`
  font-size: ${typography.sizes.heading}px;
  font-weight: 700;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.text};
`;

const UserInfo = styled.Text`
  font-size: ${typography.sizes.lg}px;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.textSecondary};
  margin-top: ${spacing.xs}px;
`;

const Section = styled.View`
  padding: ${spacing.lg}px;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }: { theme: DefaultTheme }) => theme.border};
`;

const Row = styled(Section)`
  flex-direction: row;
`;

const StatsValue = styled.Text`
  font-size: ${typography.sizes.heading}px;
  font-weight: 700;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.accent};
`;

const StatsLabel = styled.Text`
  font-size: ${typography.sizes.sm}px;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.textSecondary};
`;

const SectionTitle = styled.Text`
  font-size: ${typography.sizes.xl}px;
  font-weight: 600;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.primary};
  margin-bottom: ${spacing.md}px;
`;

const BodyText = styled.Text`
  font-size: ${typography.sizes.md}px;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.text};
`;
