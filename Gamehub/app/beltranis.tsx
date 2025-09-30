import React from "react";
import { View, Text, ScrollView, TouchableOpacity, Alert } from "react-native";
import { useTheme } from "./hooks/useTheme";
import { spacing, typography, addOpacity } from "./constants/theme";

interface ActionButtonProps {
  title: string;
  isPrimary?: boolean;
  onPress: () => void;
}

const ActionButton: React.FC<ActionButtonProps> = ({
  title,
  isPrimary = true,
  onPress,
}) => {
  const { theme } = useTheme();

  return (
    <TouchableOpacity
      style={{
        flex: 1,
        backgroundColor: isPrimary ? theme.primary : "transparent",
        padding: spacing.md,
        borderRadius: 25,
        alignItems: "center",
        borderWidth: isPrimary ? 0 : 2,
        borderColor: isPrimary ? "transparent" : theme.primary,
        shadowColor: isPrimary ? theme.primary : "transparent",
        shadowOffset: { width: 0, height: isPrimary ? 2 : 0 },
        shadowOpacity: isPrimary ? 0.25 : 0,
        shadowRadius: isPrimary ? 4 : 0,
        elevation: isPrimary ? 4 : 0,
      }}
      onPress={onPress}
    >
      <Text
        style={{
          color: isPrimary ? theme.background : theme.primary,
          fontSize: typography.sizes.md,
          fontWeight: "600",
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default function BeltranisProfile() {
  const { theme } = useTheme();
  const [isFollowing, setIsFollowing] = React.useState<boolean>(false);

  const handleFollow = () => {
    // A tipagem de `prev` é inferida corretamente pelo useState tipado
    setIsFollowing((prev) => !prev);
    Alert.alert(
      "Ação",
      !isFollowing ? "Começou a seguir!" : "Deixou de seguir"
    );
  };

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: theme.background,
      }}
    >
      <View
        style={{
          padding: spacing.xl,
          alignItems: "center",
          borderBottomWidth: 3,
          borderBottomColor: theme.accent,
        }}
      >
        <View
          style={{
            width: 100,
            height: 100,
            borderRadius: 50,
            backgroundColor: theme.primary,
            borderWidth: 4,
            borderColor: theme.accent,
            marginBottom: spacing.md,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: typography.sizes.heading,
              color: theme.background,
            }}
          >
            JD
          </Text>
        </View>
        <Text
          style={{
            fontSize: typography.sizes.heading,
            fontWeight: "700",
            color: theme.text,
            textShadowColor: theme.accent,
            textShadowRadius: 10,
          }}
        >
          Jett_Decoder // ID: 2077
        </Text>
        <Text
          style={{
            fontSize: typography.sizes.lg,
            color: theme.textSecondary,
            marginTop: spacing.xs,
          }}
        >
          Netrunner | Lvl 99 | Tokyo Grid
        </Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          padding: spacing.lg,
          gap: spacing.md,
          borderBottomWidth: 1,
          borderBottomColor: theme.border,
        }}
      >
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
      </View>

      <View
        style={{
          padding: spacing.lg,
          flexDirection: "row",
          justifyContent: "space-around",
          borderBottomWidth: 1,
          borderBottomColor: theme.border,
        }}
      >
        {[
          { label: "GAMES", value: "45" },
          { label: "WINS", value: "250" },
          { label: "K/D", value: "2.4" },
        ].map((stat) => (
          // O erro da prop 'key' desaparece com a config certa do tsconfig
          <View key={stat.label} style={{ alignItems: "center" }}>
            <Text
              style={{
                fontSize: typography.sizes.heading,
                fontWeight: "700",
                color: theme.accent,
                textShadowColor: addOpacity(theme.accent, 0.5),
                textShadowRadius: 8,
              }}
            >
              {stat.value}
            </Text>
            <Text
              style={{
                fontSize: typography.sizes.sm,
                color: theme.textSecondary,
              }}
            >
              {stat.label}
            </Text>
          </View>
        ))}
      </View>

      <View style={{ padding: spacing.lg }}>
        <Text
          style={{
            fontSize: typography.sizes.xl,
            fontWeight: "600",
            color: theme.primary,
            marginBottom: spacing.md,
          }}
        >
          Minhas Habilidades
        </Text>
        <Text style={{ fontSize: typography.sizes.md, color: theme.text }}>
          "Codificando a próxima revolução. Minha rig é uma extensão da minha
          mente. Não me enfrente no Grid."
        </Text>
      </View>
    </ScrollView>
  );
}
