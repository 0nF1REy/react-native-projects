import React from "react";
import { View, Alert } from "react-native";
import styled, { DefaultTheme } from "styled-components/native";
import { spacing, typography } from "./constants/theme";

import ActionButton from "./components/beltranis/ActionButton";
import ProfileHeader from "./components/beltranis/ProfileHeader";
import MessageModal from "./components/beltranis/MessageModal";

interface Message {
  id: string;
  text: string;
  time: string;
  isUser: boolean;
}

export default function GamerProfileScreen() {
  const [isFollowing, setIsFollowing] = React.useState<boolean>(false);
  const [isMessageModalVisible, setIsMessageModalVisible] =
    React.useState<boolean>(false);
  const [currentMessage, setCurrentMessage] = React.useState<string>("");
  const [messages, setMessages] = React.useState<Message[]>([
    {
      id: "1",
      text: "E aí, Jett! Tudo tranquilo?",
      time: "10:00 AM",
      isUser: false,
    },
    {
      id: "2",
      text: "Opa, suave! Precisando de algo?",
      time: "10:01 AM",
      isUser: true,
    },
    {
      id: "3",
      text: "Queria saber se você está livre pra uma run no Grid essa noite.",
      time: "10:05 AM",
      isUser: false,
    },
    {
      id: "4",
      text: "Claro! Me encontra às 20h no hotspot do Afterlife.",
      time: "10:06 AM",
      isUser: true,
    },
  ]);

  const handleFollow = () => {
    setIsFollowing((prev) => !prev);
    Alert.alert(
      "Ação",
      !isFollowing ? "Começou a seguir!" : "Deixou de seguir"
    );
  };

  const handleSendMessage = () => {
    if (currentMessage.trim().length > 0) {
      const newMessage: Message = {
        id: String(messages.length + 1),
        text: currentMessage.trim(),
        time: new Date().toLocaleTimeString("pt-BR", {
          hour: "2-digit",
          minute: "2-digit",
        }),
        isUser: true,
      };
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setCurrentMessage("");
    }
  };

  return (
    <ProfileScrollView contentContainerStyle={{ paddingBottom: spacing.lg }}>
      <ProfileHeader
        avatarInitials="JD"
        userName="Jett_Decoder"
        userId="2077"
        userInfo="Netrunner | Lvl 99 | Tokyo Grid"
      />

      <Row style={{ gap: spacing.md }}>
        <ActionButton
          title={isFollowing ? "SEGUINDO" : "SEGUIR"}
          isPrimary={!isFollowing}
          onPress={handleFollow}
        />
        <ActionButton
          title="MENSAGEM"
          isPrimary={true}
          onPress={() => setIsMessageModalVisible(true)}
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

      <MessageModal
        isVisible={isMessageModalVisible}
        onClose={() => setIsMessageModalVisible(false)}
        messages={messages}
        currentMessage={currentMessage}
        onMessageChange={setCurrentMessage}
        onSendMessage={handleSendMessage}
        chatPartnerName="Jett_Decoder"
      />
    </ProfileScrollView>
  );
}

const ProfileScrollView = styled.ScrollView`
  flex: 1;
  background-color: ${({ theme }: { theme: DefaultTheme }) => theme.background};
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
