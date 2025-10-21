import React from "react";
import { View } from "react-native";
import styled, { DefaultTheme, useTheme } from "styled-components/native";
import { FontAwesome } from "@expo/vector-icons";

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
  const theme = useTheme();

  return (
    <Container>
      <AvatarSection
        onPress={onAvatarPress}
        activeOpacity={0.7}
        disabled={!onAvatarPress}
      >
        <AvatarImage
          source={require("../../../assets/images/creator/alan-ryan.jpg")}
        />

        <View>
          <Greeting>Olá,</Greeting>
          <UserName>{userName}</UserName>
        </View>
      </AvatarSection>

      <NotificationContainer
        onPress={onNotificationPress}
        activeOpacity={0.7}
        disabled={!onNotificationPress}
      >
        <NotificationIcon>
          <FontAwesome name="bell" size={20} color={theme.text} />
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

// --- Estilização ---
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

const AvatarImage = styled.Image`
  width: 45px;
  height: 45px;
  border-radius: 22.5px;
  margin-right: 12px;
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
