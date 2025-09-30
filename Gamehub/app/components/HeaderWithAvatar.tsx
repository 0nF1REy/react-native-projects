import React from "react";
import { View } from "react-native";
// eslint-disable-next-line import/no-named-as-default
import styled, { DefaultTheme } from "styled-components/native";

// --- Componente Principal (Lógica) ---
interface HeaderWithAvatarProps {
  userName?: string;
  notifications?: number;
  onAvatarPress?: () => void;
  onNotificationPress?: () => void;
}

const HeaderWithAvatar: React.FC<HeaderWithAvatarProps> = ({
  userName = "Gamer",
  notifications = 3,
  onAvatarPress,
  onNotificationPress,
}) => {
  const handleAvatarPress = (): void => {
    if (onAvatarPress) onAvatarPress();
  };

  const handleNotificationPress = (): void => {
    if (onNotificationPress) onNotificationPress();
  };

  return (
    <Container>
      <AvatarSection
        onPress={handleAvatarPress}
        activeOpacity={0.7}
        disabled={!onAvatarPress}
      >
        <AvatarCircle>
          <AvatarText>
            {userName && userName.length > 0 ? userName[0].toUpperCase() : "G"}
          </AvatarText>
        </AvatarCircle>

        <View>
          <Greeting>Olá,</Greeting>
          <UserName>{userName}</UserName>
        </View>
      </AvatarSection>

      <NotificationContainer
        onPress={handleNotificationPress}
        activeOpacity={0.7}
        disabled={!onNotificationPress}
      >
        <NotificationIcon>
          <BellIcon>🔔</BellIcon>
          {notifications > 0 && (
            <Badge>
              <BadgeText>
                {notifications > 9 ? "9+" : notifications.toString()}
              </BadgeText>
            </Badge>
          )}
        </NotificationIcon>
      </NotificationContainer>
    </Container>
  );
};

// --- Componentes Estilizados com Anotação Explícita ---
const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 50px 20px 20px 20px;
  background-color: ${({ theme }: { theme: DefaultTheme }) => theme.surface};
`;

const AvatarSection = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

const AvatarCircle = styled.View`
  width: 45px;
  height: 45px;
  border-radius: 22.5px;
  background-color: ${({ theme }: { theme: DefaultTheme }) => theme.primary};
  justify-content: center;
  align-items: center;
  margin-right: 12px;
`;

const AvatarText = styled.Text`
  color: ${({ theme }: { theme: DefaultTheme }) => theme.background};
  font-size: 18px;
  font-weight: bold;
`;

const Greeting = styled.Text`
  color: ${({ theme }: { theme: DefaultTheme }) => theme.textSecondary};
  font-size: 14px;
`;

const UserName = styled.Text`
  color: ${({ theme }: { theme: DefaultTheme }) => theme.text};
  font-size: 16px;
  font-weight: bold;
`;

const NotificationContainer = styled.TouchableOpacity`
  position: relative;
`;

const NotificationIcon = styled.View`
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }: { theme: DefaultTheme }) =>
    theme.primary + "20"};
  border-radius: 20px;
`;

const BellIcon = styled.Text`
  font-size: 18px;
`;

const Badge = styled.View`
  position: absolute;
  top: -5px;
  right: -5px;
  background-color: ${({ theme }: { theme: DefaultTheme }) => theme.error};
  border-radius: 10px;
  min-width: 20px;
  height: 20px;
  justify-content: center;
  align-items: center;
`;

const BadgeText = styled.Text`
  color: ${({ theme }: { theme: DefaultTheme }) => theme.text};
  font-size: 12px;
  font-weight: bold;
`;

export default HeaderWithAvatar;
