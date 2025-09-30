import React, { useState } from "react";
import { View, Alert } from "react-native";
// eslint-disable-next-line import/no-named-as-default
import styled, { DefaultTheme, useTheme } from "styled-components/native";
import { addOpacity, spacing, typography } from "./constants/theme";

// --- Tipos para Props Condicionais ---
interface OnlineProps {
  isOnline: boolean;
}

interface PrimaryProps {
  isPrimary?: boolean;
}

// --- Componente Principal ---
export default function ExploreOutsideTabs2() {
  const [likes, setLikes] = useState(42);
  const [isOnline, setIsOnline] = useState(true);
  const theme = useTheme();

  const handleLike = () => {
    setLikes((prev) => prev + 1);
    Alert.alert("Curtiu!", "Like adicionado!");
  };

  const handleShare = () => {
    Alert.alert("Compartilhado!", "Post compartilhado com sucesso!");
  };

  const toggleOnlineStatus = () => {
    setIsOnline((prev) => !prev);
  };

  return (
    <ScreenScrollView contentContainerStyle={{ paddingBottom: spacing.lg }}>
      <HeaderSection>
        <HeaderTitle>GameHub Demo</HeaderTitle>
        <HeaderSubtitle>
          Demonstração de componentes com styled-components
        </HeaderSubtitle>
      </HeaderSection>

      <Section>
        <SectionTitle>Componentes de Card</SectionTitle>
        <Card>
          <View style={{ position: "relative", marginRight: spacing.md }}>
            <Avatar>
              <AvatarText>HC</AvatarText>
            </Avatar>
            <StatusBubble isOnline={isOnline} />
          </View>
          <TextContent>
            <NameText>Prof: Beto Pro</NameText>
            <InfoText>Magic The Gathering</InfoText>
            <Row>
              <MutedText>Level 87</MutedText>
              <MutedText>• Diamante</MutedText>
            </Row>
          </TextContent>
          <OnOffButton isOnline={isOnline} onPress={toggleOnlineStatus}>
            <ButtonText>{isOnline ? "ON" : "OFF"}</ButtonText>
          </OnOffButton>
        </Card>
      </Section>

      <Section>
        <SectionTitle>Botões Interativos</SectionTitle>
        {/* CORREÇÃO AQUI */}
        <Row>
          <ActionButtonContainer isPrimary onPress={handleLike}>
            <ActionButtonText isPrimary>LIKE {likes}</ActionButtonText>
          </ActionButtonContainer>
          <ActionButtonContainer isPrimary={false} onPress={handleShare}>
            <ActionButtonText isPrimary={false}>SHARE</ActionButtonText>
          </ActionButtonContainer>
        </Row>
      </Section>

      <Section>
        <SectionTitle>Paleta de Cores</SectionTitle>
        <View style={{ gap: spacing.sm }}>
          <Row>
            <ColorBox style={{ backgroundColor: theme.primary }}>
              <ColorBoxText>Primary</ColorBoxText>
            </ColorBox>
            <ColorBox style={{ backgroundColor: theme.secondary }}>
              <ColorBoxText>Secondary</ColorBoxText>
            </ColorBox>
          </Row>
          <Row>
            <ColorBox style={{ backgroundColor: theme.success }}>
              <ColorBoxText>Success</ColorBoxText>
            </ColorBox>
            <ColorBox style={{ backgroundColor: theme.error }}>
              <ColorBoxText>Error</ColorBoxText>
            </ColorBox>
          </Row>
        </View>
      </Section>

      <Section>
        <SectionTitle>Tipografia</SectionTitle>
        <HeaderTitle
          style={{
            fontSize: typography.sizes.heading,
            marginBottom: spacing.sm,
          }}
        >
          Heading Text
        </HeaderTitle>
        <InfoText style={{ lineHeight: 22, color: theme.text }}>
          Body text usando theme.text
        </InfoText>
        <InfoText>Secondary text usando theme.textSecondary</InfoText>
        <MutedText>Muted text usando theme.textMuted</MutedText>
      </Section>
    </ScreenScrollView>
  );
}

// --- Componentes Estilizados ---
const ScreenScrollView = styled.ScrollView`
  flex: 1;
  background-color: ${({ theme }: { theme: DefaultTheme }) => theme.background};
`;

const Section = styled.View`
  padding: ${spacing.lg}px;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }: { theme: DefaultTheme }) => theme.border};
`;

const HeaderSection = styled(Section)`
  align-items: center;
  border-bottom-color: ${({ theme }: { theme: DefaultTheme }) =>
    addOpacity(theme.primary, 0.2)};
`;

const SectionTitle = styled.Text`
  font-size: ${typography.sizes.xl}px;
  font-weight: 600;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.primary};
  margin-bottom: ${spacing.md}px;
`;

const HeaderTitle = styled.Text`
  font-size: ${typography.sizes.heading}px;
  font-weight: 700;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.text};
  margin-bottom: ${spacing.xs}px;
`;

const HeaderSubtitle = styled.Text`
  font-size: ${typography.sizes.md}px;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.textSecondary};
  text-align: center;
`;

const Card = styled.View`
  flex-direction: row;
  background-color: ${({ theme }: { theme: DefaultTheme }) => theme.surface};
  padding: ${spacing.md}px;
  border-radius: 15px;
  align-items: center;
  border: 1px solid ${({ theme }: { theme: DefaultTheme }) => theme.border};
  margin-bottom: ${spacing.md}px;
`;

const Avatar = styled.View`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: ${({ theme }: { theme: DefaultTheme }) => theme.primary};
  justify-content: center;
  align-items: center;
`;

const AvatarText = styled.Text`
  color: ${({ theme }: { theme: DefaultTheme }) => theme.background};
  font-size: 18px;
  font-weight: 600;
`;

const StatusBubble = styled.View<OnlineProps>`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 15px;
  height: 15px;
  border-radius: 7.5px;
  background-color: ${({
    theme,
    isOnline,
  }: {
    theme: DefaultTheme;
    isOnline: boolean;
  }) => (isOnline ? theme.success : theme.error)};
  border: 2px solid ${({ theme }: { theme: DefaultTheme }) => theme.surface};
`;

const TextContent = styled.View`
  flex: 1;
`;

const NameText = styled.Text`
  font-size: ${typography.sizes.lg}px;
  font-weight: 600;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.text};
  margin-bottom: ${spacing.xs}px;
`;

const InfoText = styled.Text`
  font-size: ${typography.sizes.sm}px;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.textSecondary};
  margin-bottom: ${spacing.xs}px;
`;

const MutedText = styled.Text`
  font-size: ${typography.sizes.xs}px;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.textMuted};
`;

const OnOffButton = styled.TouchableOpacity<OnlineProps>`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  justify-content: center;
  align-items: center;
  background-color: ${({
    theme,
    isOnline,
  }: {
    theme: DefaultTheme;
    isOnline: boolean;
  }) => (isOnline ? theme.accent : theme.error)};
  border: 2px solid
    ${({ theme, isOnline }: { theme: DefaultTheme; isOnline: boolean }) =>
      isOnline ? addOpacity(theme.accent, 0.7) : addOpacity(theme.error, 0.7)};
`;

const ButtonText = styled.Text`
  font-weight: 700;
  font-size: ${typography.sizes.sm}px;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.background};
`;

const ActionButtonContainer = styled.TouchableOpacity<PrimaryProps>`
  flex: 1;
  background-color: ${({
    theme,
    isPrimary = true,
  }: {
    theme: DefaultTheme;
    isPrimary?: boolean;
  }) => (isPrimary ? theme.primary : "transparent")};
  padding: ${spacing.md}px;
  border-radius: 25px;
  align-items: center;
  border: 2px solid
    ${({
      theme,
      isPrimary = true,
    }: {
      theme: DefaultTheme;
      isPrimary?: boolean;
    }) => (isPrimary ? "transparent" : theme.primary)};
`;

const ActionButtonText = styled.Text<PrimaryProps>`
  color: ${({
    theme,
    isPrimary = true,
  }: {
    theme: DefaultTheme;
    isPrimary?: boolean;
  }) => (isPrimary ? theme.background : theme.primary)};
  font-size: ${typography.sizes.md}px;
  font-weight: 600;
`;

const ColorBox = styled.View`
  flex: 1;
  height: 60px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

const ColorBoxText = styled.Text`
  color: #ffffff;
  font-size: ${typography.sizes.xs}px;
  font-weight: 600;
`;

const Row = styled.View`
  flex-direction: row;
  gap: ${spacing.sm}px;
`;
