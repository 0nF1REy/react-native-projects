import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useTheme } from "../hooks/useTheme";
import { Theme } from "../constants/theme";

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
  const { theme } = useTheme();
  // A função `createStyles` sabe o que é `theme`
  const styles = createStyles(theme);

  const handleAvatarPress = (): void => {
    if (onAvatarPress) {
      onAvatarPress();
    }
  };

  const handleNotificationPress = (): void => {
    if (onNotificationPress) {
      onNotificationPress();
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.avatarSection}
        onPress={handleAvatarPress}
        activeOpacity={0.7}
        disabled={!onAvatarPress}
      >
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>
            {userName && userName.length > 0 ? userName[0].toUpperCase() : "G"}
          </Text>
        </View>

        <View>
          <Text style={styles.greeting}>Olá,</Text>
          <Text style={styles.userName}>{userName}</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.notificationContainer}
        onPress={handleNotificationPress}
        activeOpacity={0.7}
        disabled={!onNotificationPress}
      >
        <View style={styles.notificationIcon}>
          <Text style={styles.bellIcon}>🔔</Text>

          {notifications > 0 && (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>
                {notifications > 9 ? "9+" : notifications.toString()}
              </Text>
            </View>
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

// A função espera um parâmetro do tipo `Theme`
const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingHorizontal: 20,
      paddingTop: 50,
      paddingBottom: 20,
      backgroundColor: theme.surface,
    },
    avatarSection: {
      flexDirection: "row",
      alignItems: "center",
      opacity: 1,
    },
    avatar: {
      width: 45,
      height: 45,
      borderRadius: 22.5,
      backgroundColor: theme.primary,
      justifyContent: "center",
      alignItems: "center",
      marginRight: 12,
    },
    avatarText: {
      color: theme.background,
      fontSize: 18,
      fontWeight: "bold",
    },
    greeting: {
      color: theme.textSecondary,
      fontSize: 14,
    },
    userName: {
      color: theme.text,
      fontSize: 16,
      fontWeight: "bold",
    },
    notificationContainer: {
      position: "relative",
      opacity: 1,
    },
    notificationIcon: {
      width: 40,
      height: 40,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme.primary + "20",
      borderRadius: 20,
    },
    bellIcon: {
      fontSize: 18,
    },
    badge: {
      position: "absolute",
      top: -5,
      right: -5,
      backgroundColor: theme.error,
      borderRadius: 10,
      minWidth: 20,
      height: 20,
      justifyContent: "center",
      alignItems: "center",
    },
    badgeText: {
      color: theme.text,
      fontSize: 12,
      fontWeight: "bold",
    },
  });

export default HeaderWithAvatar;
