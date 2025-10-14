import React from "react";
import {
  Modal,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import styled, { DefaultTheme } from "styled-components/native";
import { spacing, typography } from "../../constants/theme";
import Ionicons from "@expo/vector-icons/Ionicons";

interface Message {
  id: string;
  text: string;
  time: string;
  isUser: boolean;
}

interface MessageModalProps {
  isVisible: boolean;
  onClose: () => void;
  messages: Message[];
  currentMessage: string;
  onMessageChange: (text: string) => void;
  onSendMessage: () => void;
  chatPartnerName: string;
}

const MessageModal: React.FC<MessageModalProps> = ({
  isVisible,
  onClose,
  messages,
  currentMessage,
  onMessageChange,
  onSendMessage,
  chatPartnerName,
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <ModalBackground>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1 }}
        >
          <ModalContainer>
            <ModalHeader>
              <ModalTitle>Conversa com {chatPartnerName}</ModalTitle>
              <CloseButton onPress={onClose}>
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
                onChangeText={onMessageChange}
                onSubmitEditing={onSendMessage}
              />
              <SendButton onPress={onSendMessage}>
                <Ionicons name="send" size={24} color="#FFF" />
              </SendButton>
            </InputContainer>
          </ModalContainer>
        </KeyboardAvoidingView>
      </ModalBackground>
    </Modal>
  );
};

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
  background-color: ${({
    theme,
    isUser,
  }: {
    theme: DefaultTheme;
    isUser: boolean;
  }) => (isUser ? theme.primary : theme.border)};
  padding: ${spacing.sm}px ${spacing.md}px;
  border-radius: 15px;
  margin-bottom: ${spacing.sm}px;
  max-width: 80%;
  align-self: ${({ isUser }: { isUser: boolean }) =>
    isUser ? "flex-end" : "flex-start"};
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

export default MessageModal;
