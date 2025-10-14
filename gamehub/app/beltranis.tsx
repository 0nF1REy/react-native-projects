import React from "react";
import { View, Alert, Modal, TouchableOpacity, KeyboardAvoidingView, Platform } from "react-native";
import styled, { DefaultTheme } from "styled-components/native";
import { spacing, typography } from "./constants/theme";
import Ionicons from '@expo/vector-icons/Ionicons';

interface ActionButtonProps {
  title: string;
  isPrimary?: boolean;
  onPress: () => void;
}

interface ActionButtonContainerProps {
  isPrimary?: boolean;
}

interface Message {
  id: string;
  text: string;
  time: string;
  isUser: boolean;
}

const ActionButton: React.FC<ActionButtonProps> = ({
  title,
  isPrimary,
  onPress,
}) => (
  <ActionButtonContainer isPrimary={isPrimary} onPress={onPress}>
    <ActionButtonText isPrimary={isPrimary}>{title}</ActionButtonText>
  </ActionButtonContainer>
);

export default function BeltranisProfile() {
  const [isFollowing, setIsFollowing] = React.useState<boolean>(false);
  const [isMessageModalVisible, setIsMessageModalVisible] = React.useState<boolean>(false);
  const [currentMessage, setCurrentMessage] = React.useState<string>('');
  const [messages, setMessages] = React.useState<Message[]>([
    { id: '1', text: 'E aí, Jett! Tudo tranquilo?', time: '10:00 AM', isUser: false },
    { id: '2', text: 'Opa, suave! Precisando de algo?', time: '10:01 AM', isUser: true },
    { id: '3', text: 'Queria saber se você está livre pra uma run no Grid essa noite.', time: '10:05 AM', isUser: false },
    { id: '4', text: 'Claro! Me encontra às 20h no hotspot do Afterlife.', time: '10:06 AM', isUser: true },
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
        id: String(messages.length + 1), // ID simples para exemplo
        text: currentMessage.trim(),
        time: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
        isUser: true, // Assume que a mensagem enviada é do usuário
      };
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setCurrentMessage(''); // Limpa o input
    }
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

      <Modal
        animationType="slide"
        transparent={true}
        visible={isMessageModalVisible}
        onRequestClose={() => {
          setIsMessageModalVisible(!isMessageModalVisible);
        }}
      >
        <ModalBackground>
          <KeyboardAvoidingView // Adicionado KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{ flex: 1 }}
          >
            <ModalContainer>
              <ModalHeader>
                <ModalTitle>Conversa com Jett_Decoder</ModalTitle>
                <CloseButton onPress={() => setIsMessageModalVisible(false)}>
                  <Ionicons name="close-circle" size={30} color="#FF6347" />
                </CloseButton>
              </ModalHeader>

              <ChatArea>
                {messages.map((message) => (
                  <MessageBubble key={message.id} isUser={message.isUser}>
                    <MessageText>{message.text}</MessageText>
                    <MessageTime>{message.time}</MessageTime>
                  </MessageBubble>
                ))}
              </ChatArea>

              <InputContainer>
                <MessageInput
                  placeholder="Digite sua mensagem..."
                  placeholderTextColor="#888"
                  value={currentMessage}
                  onChangeText={setCurrentMessage}
                  onSubmitEditing={handleSendMessage} // Permite enviar com "Enter" no teclado
                />
                <SendButton onPress={handleSendMessage}>
                  <Ionicons name="send" size={24} color="#FFF" />
                </SendButton>
              </InputContainer>
            </ModalContainer>
          </KeyboardAvoidingView>
        </ModalBackground>
      </Modal>
    </ProfileScrollView>
  );
}

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

const ModalBackground = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.7);
`;

const ModalContainer = styled.View`
  background-color: ${({ theme }: { theme: DefaultTheme }) => theme.background};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  flex: 1;
  width: 100%;
  padding-bottom: ${spacing.md}px;
`;

const ModalHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${spacing.md}px;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }: { theme: DefaultTheme }) => theme.border};
`;

const ModalTitle = styled.Text`
  font-size: ${typography.sizes.xl}px;
  font-weight: 600;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.text};
`;

const CloseButton = styled.TouchableOpacity`
  padding: ${spacing.xs}px;
`;

const ChatArea = styled.ScrollView`
  flex: 1;
  padding: ${spacing.md}px;
`;

interface MessageBubbleProps {
  isUser: boolean;
}

const MessageBubble = styled.View<MessageBubbleProps>`
  background-color: ${({ theme, isUser }: { theme: DefaultTheme; isUser: boolean }) =>
    isUser ? theme.primary : theme.border};
  padding: ${spacing.sm}px ${spacing.md}px;
  border-radius: 15px;
  margin-bottom: ${spacing.sm}px;
  max-width: 80%;
  align-self: ${({ isUser }: { isUser: boolean }) => (isUser ? "flex-end" : "flex-start")};
`;

const MessageText = styled.Text`
  font-size: ${typography.sizes.md}px;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.text};
`;

const MessageTime = styled.Text`
  font-size: ${typography.sizes.xs}px;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.textSecondary};
  align-self: flex-end;
  margin-top: ${spacing.xs}px;
`;

const InputContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: ${spacing.md}px;
  border-top-width: 1px;
  border-top-color: ${({ theme }: { theme: DefaultTheme }) => theme.border};
  background-color: ${({ theme }: { theme: DefaultTheme }) => theme.background};
`;

const MessageInput = styled.TextInput`
  flex: 1;
  background-color: ${({ theme }: { theme: DefaultTheme }) => theme.border};
  border-radius: 25px;
  padding: ${spacing.sm}px ${spacing.md}px;
  margin-right: ${spacing.md}px;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.text};
  font-size: ${typography.sizes.md}px;
`;

const SendButton = styled.TouchableOpacity`
  background-color: ${({ theme }: { theme: DefaultTheme }) => theme.primary};
  width: 45px;
  height: 45px;
  border-radius: 22.5px;
  justify-content: center;
  align-items: center;
`;